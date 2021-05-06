import java.util.NoSuchElementException;

public class ListQueue<E> {
	private Node<E> front;
	private Node<E> rear;
	public int size;
	
	//생성자
	public ListQueue() {
		front = rear = null;
		size = 0;
	}
	
	//큐 사이즈
	public int size() {
		return size;
	}
	
	//큐 비었을 때
	public boolean isEmpty() {
		return size == 0;
	}
	
	//front 노드
	public Node<E> front(){
		return front;
	}
	
	//rear 노드
	public Node<E> rear(){
		return rear;
	}
	
	//front의 값
	public E peek() {
		if(isEmpty()) {
			throw new NoSuchElementException();
		}
		return front.getData();
	}
	
	//삽입
	public void push(E e) {
		Node<E> newNode = new Node<E>(e);
		if(isEmpty()) {
			front = rear =newNode;
		}else {
			rear.setNext(newNode);
			rear = newNode;
		}
		size++;
	}
	
	//front 꺼내기
	public E pop() {
		if(isEmpty()) {
			throw new NoSuchElementException();
		}else {
			E frontData = front.getData();
			front = front.getNext();
			if(front == null) {
				rear = null;
			}
			size--;
			return frontData;
		}
	}
}
