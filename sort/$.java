import java.util.Arrays;

public class $ {

    public static <T extends Comparable<T>> int compare(T a, T b) {
        return a.compareTo(b);
    }

    public static <T extends Comparable<T>> void swap(T[] a, int i, int j) {
        T tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

    public static <T extends Comparable<T>> void print(T[] arr) {
        for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    interface Func<T extends Comparable<T>> {
        void sort(T[] arr);
    }

    public static <T extends Comparable<T>> void test(String intro, T[] arr, T[] result, Func<T> func) {
        System.out.println("====== " + intro + " ======");
        T[] target = arr.clone();

        // 정렬 시작.
        long start = System.currentTimeMillis();
        func.sort(target);
        long passing = System.currentTimeMillis() - start;

        // 매번 Arrays 정렬을 할 수 없기 때문에 정렬된 결과를 인수로 가져온다.
        System.out.println("정렬 결과는 " + Arrays.equals(target, result));
        System.out.println("소요시간(ms): " + passing + "\n");
    }

}
