import java.util.Arrays;

public class SortApp {
    public static void main(String[] args) {
        Integer[] origin = { 2, 3, 4, 1, 1, 2, 523, 4, 23, 5 };
        Integer[] result = origin.clone();
        Arrays.sort(result);

        $.test("bubble sort", origin, result, (arr) -> Bubble.sort(arr));
        $.test("selection sort", origin, result, (arr) -> Selection.sort(arr));
        $.test("insertion sort", origin, result, (arr) -> Insertion.sort(arr));
    }
}
