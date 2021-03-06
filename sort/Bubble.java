public class Bubble {
    // 자기보다 작은 값을 만나면 swap
    public static <T extends Comparable<T>> void sort(T a[]) {
        int len = a.length;
        for (int i = 0; i < len - 1; i++) {
            for (int j = 0; j < len - i - 1; j++)
                if ($.compare(a[j], a[j + 1]) > 0)
                    $.swap(a, j, j + 1);
        }
    }
}
