function find(x: number, arr: number[], i: number = 0) {
    if (x == arr[i]) {
        return i;
    }
    if (i == arr.length) { return -1; }
    return find(x, arr, i + 1);

}

console.log(find(12, [1, 2, 3,8,9,12]));
