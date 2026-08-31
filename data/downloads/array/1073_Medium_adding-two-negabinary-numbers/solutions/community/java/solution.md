# java 2ms solution with explanation

**Author:** pangeneral
**Votes:** 10
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/307677/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/307677/)

---

The basic idea is sum bit by bit. The key is how to process carry. There are five situations for the bit sum:
1. sum = 0 -> carry = 0, result = 0
2. sum = 1 -> carry = 0, result = 1
3. sum = 2 -> carry = -1, result = 0
4. sum = 3 -> carry = -1, result = 1
5. sum = -1 -> carry = 1, result = 1

Here, ```carry``` will be added to the sum of next calculation and ```result``` is what we put on current bit. We can either enumerate all five situations or use bit manipulation:
1. carry = -1 * (sum >> 1)
2. result = sum & 1

to calculate ```carry``` and ```result``` quickly.

```
public int[] addNegabinary(int[] arr1, int[] arr2) {
    int i1 = arr1.length - 1, i2 = arr2.length - 1, carry = 0;
    List<Integer> resultList = new ArrayList<Integer>();
	
	// 1. calculate sum of arr1 and arr2
    while (i1 >= 0 || i2 >= 0 || carry != 0) {
        int n1 = i1 >= 0 ? arr1[i1--] : 0;
        int n2 = i2 >= 0 ? arr2[i2--] : 0;
        int sum = n1 + n2 + carry;
		int result = sum & 1;
        carry = -1 * (sum >> 1) ;
		resultList.add(0, result);        
    }
	
	// 2. remove leading zero
    int beginIndex = 0;
    while (beginIndex < resultList.size() && resultList.get(beginIndex) == 0)
        beginIndex++;
		
    if (beginIndex == resultList.size())
        return new int[]{0};
    int resultArray[] = new int[resultList.size() - beginIndex];
    for (int i = 0; i < resultArray.length; i++)
        resultArray[i] = resultList.get(i + beginIndex);
    return resultArray;
}
```