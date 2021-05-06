public class Calculator {
	ListQueue<Token> infix = new ListQueue<>(); //중위표현용 큐
	ListStack<Token> stack = new ListStack<>(); //스택
	ListQueue<Token> queue = new ListQueue<>();	//큐
	
	//중위표현 큐에 삽입
	public void inputInfix(String input) {
		String[] str = input.split("\\s");
		for(int i=0; i<str.length; i++) {
			String s = str[i];
			
			if(!infix.isEmpty()) { //단항연산자 "-" 일때 구분하기 위해 변환  
				if(isOperator(infix.rear().getData()) && s.equals("-")) {
					s = "m"; 
				}
			}
			
			Token inputToken = new Token(s);
			
			if(isOperator(inputToken)) { //연산자 
				infix.push(inputToken);
			}else { //피연산자
				inputToken = new Token(Integer.parseInt(s));
				infix.push(inputToken);
			}
		}
		String sharp = "#";
		infix.push(new Token(sharp));
	}

	//후위표현 변환
	public void getPostfix() {
		String sharp = "#";
		stack.push(new Token(sharp));
		for(Token token=infix.pop(); !token.getItem().equals("#"); token = infix.pop()) {
			if(isOperator(token)) { //연산자
				if(token.getItem().equals(")")) { // ")"이 입력될때
					while(!stack.peek().getItem().equals("(")) { // "("이 나올때 까지 pop()
						queue.push(stack.pop());
					}
					stack.pop();
				}else { // 나머지 연산자들
					if(isp(stack.peek()) > icp(token)) { //스택의 연산자보다 우선순위 높은 연산자 
						stack.push(token);
					}else {
						while(isp(stack.peek()) <= icp(token)) { // 스택의 연산자와 우선순위가 같거나 낮은 연산자
							if(stack.peek().getItem().equals("m") && token.getItem().equals("m")) { //단항연산자 "-"가 연속일때  
								break;
							}
							queue.push(stack.pop());
						}
						stack.push(token);
					}
				}
			}else { //피연산자
				queue.push(token);
			}
		}
		while(!stack.peek().getItem().equals("#")) { //스택에 남아있는 연산자들 큐에 삽입
			queue.push(stack.pop());
		}
	}
	
	//후위표현 출력
	public void printPostfix() {
		System.out.print("--- postfix notation은 : ");
		for(Node<Token> curToken = queue.front(); curToken != null; curToken = curToken.getNext()) {
			System.out.print(curToken.getData().getItem() + " ");
		}
		System.out.println();
	}
	
	//계산
	public void calculation() {
		int result;
		String sharp = "#";
		queue.push(new Token(sharp));
		while(true) {
			Token token = queue.pop();
			if(token.getItem().equals("#")) {
				break;
			}else if(!isOperator(token)) { //피연산자 큐에 push()
				stack.push(token);
			}else { //연산자
				if(stack.peek().getItem().equals("#") || stack.top().getNext().getData().getItem().equals("#")) { //피연산자가 없을 때
					System.out.println("[오류] 이해할 수 없는 수식");
					for(; !queue.peek().getItem().equals("#"); queue.pop()) {
					}
					queue.pop();
					return;
				}
				
				int num1;
				int num2;
				if(token.getItem().equals("m") || token.getItem().equals("~")) { //단항연산자 계산
					num1 = (int)stack.pop().getItem();
					if(token.getItem().equals("m")) {
						result = -1 * num1;
						stack.push(new Token(result));
					}else {
						result =  ~num1;
						stack.push(new Token(result));
					}
				}else { //이항연산자 계산
					num1 = (int)stack.pop().getItem();
					num2 = (int)stack.pop().getItem();
					if(token.getItem().equals("+")) {
						result = num2 + num1;
						stack.push(new Token(result));
					}else if(token.getItem().equals("-")) {
						result = num2 - num1;
						stack.push(new Token(result));
					}else if(token.getItem().equals("*")) {
						result = num2 * num1;
						stack.push(new Token(result));
					}else if(token.getItem().equals("/")) {
						result = num2 / num1;
						stack.push(new Token(result));
					}else if(token.getItem().equals("%")) {
						result = num2 % num1;
						stack.push(new Token(result));
					}else if(token.getItem().equals("<<")) {
						result = num2 << num1;
						stack.push(new Token(result));
					}else if(token.getItem().equals(">>")) {
						result = num2 >> num1;
						stack.push(new Token(result));
					}else if(token.getItem().equals("&")) {
						result = num2 & num1;
						stack.push(new Token(result));
					}else if(token.getItem().equals("^")) {
						result = num2 ^ num1;
						stack.push(new Token(result));
					}else if(token.getItem().equals("|")) {
						result = num2 | num1;
						stack.push(new Token(result));
					}
				}
			}
		}
		System.out.println("---- 결과는 " + stack.pop().getItem());
	}
	
	//연산자와 피연산자 구별
	public boolean isOperator(Token token) {
		switch(String.valueOf(token.getItem())) {
		case "m":
			return true;
		case "~":
			return true;
		case "+":
			return true;
		case "-":
			return true;
		case "*":
			return true;
		case "/":
			return true;
		case "%":
			return true;
		case "<<":
			return true;
		case ">>":
			return true;
		case "&":
			return true;
		case "^":
			return true;
		case "|":
			return true;
		case "(":
			return true;
		case ")":
			return true;
		case "#":
			return true;
		default :
			return false;
		}
	}
	
	//스택안에 있는 연산자 우선순위
	public int isp(Token token) {
		String s = String.valueOf(token.getItem());
		if(s.equals("m")) {
			return 1;
		}else if(s.equals("~")){
			return 2;
		}else if(s.equals("*") || s.equals("/") || s.equals("%")) {
			return 3;
		}else if(s.equals("+") || s.equals("-")) {
			return 4;
		}else if(s.equals("<<") || s.equals(">>")) {
			return 5;
		}else if(s.equals("&")) {
			return 6;
		}else if(s.equals("^")) {
			return 7;
		}else if(s.equals("|")) {
			return 8;
		}else if(s.equals("(")) {
			return 9;
		}else if(s.equals("#")) {
			return 10;
		}
		return -1;
	}
	
	//스택에 push()하는 연산자 우선순위
	public int icp(Token token) {
		String s = String.valueOf(token.getItem());
		if(s.equals("m")) {
			return 1;
		}else if(s.equals("~")) {
			return 2;
		}else if(s.equals("*") || s.equals("/") || s.equals("%")) {
			return 3;
		}else if(s.equals("+") || s.equals("-")) {
			return 4;
		}else if(s.equals("<<") || s.equals(">>")) {
			return 5;
		}else if(s.equals("&")) {
			return 6;
		}else if(s.equals("^")) {
			return 7;
		}else if(s.equals("|")) {
			return 8;
		}else if(s.equals("(")) {
			return 0;
		}
		return -1;
	}
}
