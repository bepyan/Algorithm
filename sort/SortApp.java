public class SortApp {
    public static void main(String[] args) {
        Integer[] arr = { 2, 3, 4, 1, 1, 2, 523, 4, 23, 5 };

        $.test("bubble sort", () -> Bubble.sort(arr.clone()));
        $.test("selection sort", () -> Selection.sort(arr.clone()));
        $.test("insertion sort", () -> Insertion.sort(arr.clone()));
    }
}
