public class Node<E> {
	private E data;
	private Node<E> next;
	
	//노드 생성자
	public Node(E e) {
		this.data = e;
		this.next = null;
	}
	
	//data getter
	public E getData() {
		return data;
	}
	
	//next getter
	public Node<E> getNext(){
		return next;
	}
	
	//next setter
	public void setNext(Node<E> n) {
		next = n;
	}
}
