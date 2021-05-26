public class Selection {
    // 이후에 있는 최솟값과 swap하여 정렬
    public static <T extends Comparable<T>> void sort(T a[]) {
        int len = a.length;
        for (int i = 0; i < len; i++) {
            int minIdx = i;
            for (int j = i + 1; j < len; j++)
                if ($.compare(a[j], a[minIdx]) < 0)
                    minIdx = j;
            $.swap(a, i, minIdx);
        }
    }
}
