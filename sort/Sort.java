import java.util.Arrays;

public class Sort {

    public void swap(int[] a, int i, int j) {
        int tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

    public void print(int[] arr) {
        for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public void sort(int[] arr) {

    }

    public void test(String intro, int[] arr, int[] result) {
        System.out.println("====== " + intro + " ======");
        int[] target = arr.clone();

        // 정렬 시작.
        long start = System.currentTimeMillis();
        sort(target);
        long passing = System.currentTimeMillis() - start;

        // 매번 Arrays 정렬을 할 수 없기 때문에 정렬된 결과를 인수로 가져온다.
        System.out.println("정렬 결과는 " + Arrays.equals(target, result));
        System.out.println("소요시간(ms): " + passing + "\n");
    }

}
