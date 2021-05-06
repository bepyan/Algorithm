import java.util.Scanner;

public class CalculatorApp {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		Calculator c = new Calculator();
		
		while(true) {
			System.out.print("계산식을 입력하세요(종료는 quit): ");
			String input = sc.nextLine();
			if(input.equals("quit")) {
				System.out.print("**** 종료합니다 ****");
				break;
			}
			c.inputInfix(input); //중위표현식 입력
			c.getPostfix(); //후위표현식 구하기
			c.printPostfix(); //후위표현식 출력
			c.calculation(); //계산
		}
	}
}
