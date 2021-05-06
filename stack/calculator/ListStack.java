import java.util.EmptyStackException;

public class ListStack <E>{
	private Node<E> top;
	private int size;
	
	//생성자
	public ListStack() {
		top = null;
		size = 0;
	}
	
	//스택 사이즈
	public int size() {
		return size;
	}
	
	//스택이 비었을 떄
	public boolean isEmpty() {
		return size == 0;
	}
	
	//top 노드
	public Node<E> top(){
		return top;
	}
	
	//top의 값
	public E peek() {
		if(isEmpty()) {
			throw new EmptyStackException();
		}
		return top.getData();
	}
	
	//스택 삽입
	public void push(E e) {
		Node<E> newNode = new Node<E>(e);
		newNode.setNext(top);
		top = newNode;
		size++;
	}
	
	//top 꺼내기
	public E pop() {
		if(isEmpty()) {
			throw new EmptyStackException();
		}
		E topData = top.getData();
		top = top.getNext();
		size--;
		return topData;
	}
}
