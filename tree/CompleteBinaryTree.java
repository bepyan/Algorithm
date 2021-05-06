import java.util.*;

public class CompleteBinaryTree {
    private List<Integer> list = new ArrayList<>();

    public CompleteBinaryTree(int num) {
        list.add(0);
        for (int i = 1; i <= num; i++)
            list.add(i);
    }

    public void push(int n) {
        push(1, n);
    }

    public void push(int idx, int n) {
        if (list.size() <= idx)
            while (list.size() < idx * 2)
                list.add(null);

        if (list.get(idx) == null) {
            list.set(idx, n);
            return;
        }

        if (list.get(idx) > n)
            push(idx * 2, n);
        else
            push(idx * 2 + 1, n);
    }

    /* 순회 */
    private void preorder(int idx) {
        if (idx >= list.size())
            return;

        System.out.print(list.get(idx) + " ");
        preorder(idx * 2);
        preorder(idx * 2 + 1);
    }

    public void preorder() {
        preorder(1);
        System.out.println("");
    }

    private void inorder(int idx) {
        if (idx >= list.size())
            return;
        inorder(idx * 2);
        System.out.print(list.get(idx) + " ");
        inorder(idx * 2 + 1);
    }

    public void inorder() {
        inorder(1);
        System.out.println("");
    }

    private void postorder(int idx) {
        if (idx >= list.size())
            return;
        postorder(idx * 2);
        postorder(idx * 2 + 1);
        System.out.print(list.get(idx) + " ");
    }

    public void postorder() {
        postorder(1);
        System.out.println("");
    }

    public void levelorder() {
        for (int i = 1; i < list.size(); i++)
            System.out.print(list.get(i) + " ");
        System.out.println("");
    }

    /* 트리 출력 */
    public void printFullTree() {
        printFullTree(1, "", "");
    }

    private void printFullTree(int idx, String front, String child) {
        if (idx >= list.size()) {
            if (idx % 2 == 1 && idx - 1 < list.size())
                System.out.println(front + "x");
            return;
        }

        System.out.println(front + list.get(idx));

        int nextIdx = idx * 2;
        printFullTree(nextIdx + 1, child + "├── ", child + "│   ");
        printFullTree(nextIdx, child + "└── ", child + "    ");
    }

    public void printAddTree() {
        printAddTree(1, "", "");
    }

    private void printAddTree(int idx, String front, String child) {
        if (idx >= list.size())
            return;
        if (list.get(idx) == null) {
            if ((idx % 2 == 1 && list.get(idx - 1) != null) || (idx % 2 == 0 && list.get(idx + 1) != null))
                System.out.println(front + "x");
            return;
        }
        System.out.println(front + list.get(idx));

        int nextIdx = idx * 2;
        printAddTree(nextIdx + 1, child + "├── ", child + "│   ");
        printAddTree(nextIdx, child + "└── ", child + "    ");
    }
}