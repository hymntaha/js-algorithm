const max_sub_array_of_size_k = function(k, arr) {    const result = [];
    let windowStart = 0;
    let windowSum = 0;
    let maxSum = 0;

    for(windowEnd = 0; windowEnd<arr.length; windowEnd++){
        windowSum += arr[windowEnd];

        if(windowEnd >= K-1){
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }

    return maxSum;
}

max_sum_subarray(3,[2, 1, 5, 1, 3, 2])