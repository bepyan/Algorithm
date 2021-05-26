
public class Insertion {
    public static <T extends Comparable<T>> void sort(T[] a) {
        int len = a.length;
        for (int i = 1; i < len; i++)
            for (int j = i; j > 0; j--) {
                if ($.compare(a[j], a[j - 1]) < 0)
                    $.swap(a, j, j - 1);
                else
                    break;
            }
    }

    private static <T extends Comparable<T>> void print(T[] a) {
        $.print(a, "=== Insertion Sort ===");
    }
}
