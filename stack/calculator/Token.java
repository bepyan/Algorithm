public class Token<E> {
	private E item;
	
	//Token »ý¼ºÀÚ
	public Token(E e) {
		item = e;
	}
	
	//getter
	public E getItem() {
		return item;
	}
	
	//setter
	public void setItem(E newItem) {
		item = newItem;
	}
}
