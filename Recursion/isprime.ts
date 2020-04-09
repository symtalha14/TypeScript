function isPrime(N: number, f: number = 2) {
    if (N == 2) { return true; }
    if (N == 1 || N == f || N % f == 0) { return false; }
    if (N % f != 0) {
        isPrime(N, f + 1);
        return true;
    }
}

console.log(isPrime(2234));