function find_averages_of_subarrays(K, arr) {
    const result = [];
    let windowSum = 0.0,
      windowStart = 0;
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //   console.log('Window end ' + windowEnd);
      windowSum += arr[windowEnd]; // add the next element
      console.log('Window sum ' + windowSum)
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (windowEnd >= K - 1) {
        result.push(windowSum / K); // calculate the average
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
  
    return result;
  }
  
  
  const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
  console.log(`Averages of subarrays of size K: ${result}`);
  