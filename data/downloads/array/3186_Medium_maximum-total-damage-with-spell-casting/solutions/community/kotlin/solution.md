# 100% Kotlin | Java | Dynamic Programming | Recusion | Longest Increasing Subsequence

**Author:** pavankumar98gurram
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5325816/](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5325816/)

---

**Understanding the recursive approach first**
- We can solve it by recursively calling a function which adds current element (if valid) or ignores current element
- valid check is done by checking if curr-1, curr-2, curr+1, curr+2 is present in the visited set (we add curr to visited if none of the above is present) 

**Recursive Approach Java Code**

```
public long maximumTotalDamage(int[] power) {
	long[] maxSum = new long[1];
	HashMap<Integer, Integer> visited = new HashMap<Integer, Integer>();   
	helper(power, maxSum, 0, 0, visited);
	return maxSum[0];
}

private void helper(int[] power, long[] maxSum, int i, long currSum, HashMap<Integer, Integer> visited){
	if(maxSum[0] < currSum){
		maxSum[0] = currSum;
	}
	if(i >= power.length) return;

	if(!visited.containsKey(power[i]+1) && !visited.containsKey(power[i]-1) 
	   && !visited.containsKey(power[i]+2) && !visited.containsKey(power[i]-2)){
		visited.put(power[i], visited.getOrDefault(power[i], 0) + 1);
		helper(power, maxSum, i+1, currSum + power[i], visited);
		// remove
		if(visited.get(power[i]) > 1) {
			visited.put(power[i], visited.get(power[i]) - 1);
		}else{
			visited.remove(power[i]);
		}
	}
	helper(power, maxSum, i+1, currSum, visited);
    }
```

The above code works, but gives TLE for some test cases. Have to optimise it using DP

- When using dynamic programming we have to build solution bottom-up
- i.e. dp[0], should result answer if only 1 element is present in the power
- to avoid inconsistency in bottom-up approach, we have to only do for unique elements
- so calculate frequency (using a hashmap) of each element and store sorted unique elements into a new list
- (why sorted? - we need to check for cur-1 and cur-2 at each step from previous steps - this is only possible if we sort the input)
- (why freq? - we use the frequency to multiply the current element when adding to the sum)
- run a loop from 1 to n-1 (n is the number of unique powers) to calculate dynamic programming solution in bottom-up approach 
- at each loop, we calculate dp[i], i.e. solution upto i-th element in uniquePowers
- we have to check for the cur-1 and cur-2, if they exist and note their dp values (as we are working on the sorted collection, we only have to check for dp[i-1] and dp[i-2] if they are matching)
- and find a highest value less than cur-2 to inculde it with current element and calculate the updated dp[i] (if including it would be dp[j] + curr * freq(curr)) (whenever any element is valid we take all the elements and add them up to solution)
- we find the max value among the above 4 solutions to updated dp[i] (alone, -1, -2, including)
- the answer is dp[n-1] 

**Dynamic Programming Approach Java Code**
```
 public long maximumTotalDamage(int[] power) {
	HashMap<Integer, Integer> freq = new HashMap<Integer, Integer>();
	for(int i: power){
		freq.put(i, freq.getOrDefault(i, 0) + 1);
	}

	List<Integer> uniquePowers = new ArrayList<>(freq.keySet());
	Collections.sort(uniquePowers);
	int n = uniquePowers.size();

	long[] dp = new long[n];
	int p = uniquePowers.get(0); // smallest power
	dp[0] = (long) freq.getOrDefault(p, 0) * p;

	for(int i = 1; i < n; i++){
		// calculating the sum with only this element
		int e = uniquePowers.get(i);
		long curr = (long) freq.getOrDefault(e, 0) * e; 

		long maxSum = curr;

		// in the sorted array of uniquePowers
		// the prev 2 could be (could not be) power-1 or power-2 
		// so getting the max of them

		// ignoring current element and going with i-1 element
		if(i-1 >= 0 && maxSum < dp[i-1] && (uniquePowers.get(i-1) == e - 1|| uniquePowers.get(i-1) == e - 2)){ 
			maxSum = dp[i-1]; 
		}
		// ignoring current and prev and going with i-2 element
		if(i-2 >= 0 && maxSum < dp[i-2] && uniquePowers.get(i-2) == e - 2){ 
			maxSum = dp[i-2];
		}

		// finding a power smaller than power-2 and it adding current sum
		// i.e. including current and a (first) power smaller than power-2 
		int j = i;
		while(j >= 0 && uniquePowers.get(j) >= uniquePowers.get(i)-2){
			j--;
		}
		if(j >=0 && maxSum < dp[j] + curr){
			maxSum = dp[j] + curr;
		}
		dp[i] = maxSum;
	}
	return dp[n-1];
}
```

**Optimized Approach (DP) Kotlin Code**

```
val freq = HashMap<Int, Int>();
for(i in power){
	freq.put(i, freq.getOrDefault(i,0) + 1);
}

val uniquePowers = ArrayList<Int>(freq.keys)
uniquePowers.sort()
val n = uniquePowers.size
val dp = LongArray(n)

// first element /smallest element
val e = uniquePowers.get(0)
dp[0] = e * freq.get(e)!!.toLong()

for(i in 1..n-1){
	// include only current element
	val curr = uniquePowers.get(i)
	var currSum: Long = curr * freq.get(curr)!!.toLong()
	var maxSum = currSum

	// check currentElement-1 and currentElement-2 
	if(i-1>=0 && uniquePowers.get(i-1) in curr-2..curr-1 && dp[i-1] > maxSum)
		maxSum = dp[i-1]

	if(i-2>=0 && uniquePowers.get(i-2) == curr-2 && dp[i-2] > maxSum)
		maxSum = dp[i-2]

	// include current element and elements lesser than e-2 if exists 
	var j = i
	while(j>=0 && uniquePowers.get(j) >= curr-2){
		j--
	}
	if(j>=0 && dp[j] + currSum > maxSum){
		maxSum = dp[j] + currSum
	}
	dp[i] = maxSum
}

return dp[n-1]
```
