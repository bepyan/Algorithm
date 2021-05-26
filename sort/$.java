public class $ {

    public static <T extends Comparable<T>> int compare(T a, T b) {
        return a.compareTo(b);
    }

    public static <T extends Comparable<T>> void swap(T[] a, int i, int j) {
        T tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

    // 출력
    public static <T extends Comparable<T>> void print(T[] arr) {
        for (T i : arr)
            System.out.print(i + " ");
        System.out.println("\n");
    }

    public static <T extends Comparable<T>> void print(T[] arr, String intro) {
        System.out.println(intro);
        print(arr);
    }

    // 테스트
    interface Func {
        void sort();
    }

    public static <T extends Comparable<T>> void test(String intro, Func func) {
        System.out.println("=== " + intro + " ===");
        long start = System.currentTimeMillis();
        func.sort();
        long passing = System.currentTimeMillis() - start;
        System.out.println("소요시간(ms):  " + passing + "\n");
    }
}
