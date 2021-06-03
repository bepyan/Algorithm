import java.util.Arrays;

public class SortApp {
    public static void main(String[] args) {
        Integer[] origin = { 2, 3, 4, 1, 1, 2, 523, 4, 23, 5 };
        Integer[] result = origin.clone();
        Arrays.sort(result);

        $.test("bubble sort", origin.clone(), result, (arr) -> Bubble.sort(arr));
        $.test("selection sort", origin.clone(), result, (arr) -> Selection.sort(arr));
        $.test("insertion sort", origin.clone(), result, (arr) -> Insertion.sort(arr));

        Sort s = new Quick();
        int[] ori = { 4, 23, 2, 3, 1 };
        int[] res = { 1, 2, 3, 4, 23 };
        s.test("quick sort", ori, res);
    }
}
