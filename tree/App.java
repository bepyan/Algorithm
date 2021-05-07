import java.io.*;

public class App {
    public static void run1() throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());

        CompleteBinaryTree bt = new CompleteBinaryTree(num);
        bt.preorder();
        bt.inorder();
        bt.postorder();
        bt.levelorder();
        bt.printFullTree();
    }

    public static void run2() throws Exception {
        CompleteBinaryTree bt = new CompleteBinaryTree(0);
        while (true) {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int num = Integer.parseInt(br.readLine());
            if (num == -1)
                break;
            bt.push(num);
            bt.printAddTree();
        }
    }

    public static void main(String[] args) throws Exception {
        run2();
    }
}
