package stack;
// https://www.acmicpc.net/problem/1918

import java.io.*;
import java.util.*;

public class PostfixNotation {

	static int precedence(char ch) {
        if (ch == '(') return 0;
        if (ch == '+' || ch == '-') return 1;
        else return 2;
    }

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String str = br.readLine();
		int n = str.length();
		StringBuilder sb = new StringBuilder();
		Stack<Character> st = new Stack<>();

		for (int i = 0; i < n; i++) {
			char ch = str.charAt(i);
			if ('A' <= ch && ch <= 'Z')
				sb.append(ch);
			else {
				switch (ch) {
				case '(':
					st.push(ch);
					break;
				case ')':
					while (!st.isEmpty() && st.peek() != '(')
						sb.append(st.pop());
					if (!st.isEmpty() && st.peek() == '(')
						st.pop();
					break;
				default:
					while (!st.isEmpty() && precedence(st.peek()) >= precedence(ch))
						sb.append(st.pop());
					st.push(ch);
				}
			}
		}

		while (!st.isEmpty())
			sb.append(st.pop());

		System.out.println(sb.toString());

	}

}