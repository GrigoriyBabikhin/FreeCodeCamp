function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        let countArray = countdown(n - 1);
        countArray.unshift(n)
        return countArray;
    }
}

