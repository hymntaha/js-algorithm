function max_sum_subarray(K, arr) {
    const result = [];
    let windowStart = 0;
    let windowSum = 0;

    for(windowEnd = 0; windowEnd<arr.length; windowEnd++){
        windowSum += arr[windowEnd];
        console.log(windowSum)

        if(windowEnd >= K-1){
            result.push(windowSum);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }

    const largest = result.sort()
    return largest[largest.length -1 ];
}

max_sum_subarray(3,[2, 1, 5, 1, 3, 2])