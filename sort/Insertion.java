public class Insertion {
    // 정렬된 부분에 자신 위치를 삽입 (앞으로 가면서 하나하나 swap)
    public static <T extends Comparable<T>> void sort(T a[]) {
        int len = a.length;
        for (int i = 1; i < len; i++) {
            for (int j = i; j > 0; j--) {
                if ($.compare(a[j], a[j - 1]) < 0)
                    $.swap(a, j, j - 1);
                else
                    break;
            }
        }
    }
}
