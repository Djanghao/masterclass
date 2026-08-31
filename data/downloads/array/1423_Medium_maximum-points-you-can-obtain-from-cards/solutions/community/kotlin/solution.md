# Think oppositely. Python Kotlin C++

**Author:** itanki3085
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/2198978/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/2198978/)

---

#### Think oppositely with sliding windows
\u4E00\u500B\u9663\u5217\u88E1\u9762\u6709\u6211\u5011\u60F3\u76F8\u52A0\u8D77\u4F86\u7684\u7B54\u6848\uFF0C\u90A3\u4E00\u5B9A\u6709\u88AB\u62CB\u68C4\u3001\u4E0D\u88AB\u76F8\u52A0\u7684\u6578\u5B57\u3002\u800C\u9019\u4E9B\u6578\u5B57\u525B\u597D\u7DCA\u7DCA\u76F8\u9023\u3002
\u6240\u4EE5\u53EF\u4EE5\u7528moving(sliding) windows\u53BB\u628A\u4E0D\u88AB\u76F8\u52A0\u7684\u6578\u5B57\u5011\u627E\u51FA\u4F86\u3002
\u90A3\u986F\u800C\u6613\u898B\u7684\uFF0C\u5982\u679C\u90A3\u4E9B\u4E0D\u8981\u7684\u6578\u5B57\u7684\u7E3D\u548C\u6700\u5C0F\uFF0C\u6211\u5011\u8981\u7684\u7D50\u679C\u4E5F\u5C31\u6703\u6700\u5927\u3002
\u90A3moving windows\u8981\u627E\u5E7E\u500B\u6578\u5B57\uFF1F\u984C\u76EE\u8AAA\u8981\u7684\u662Fk\u500B\u6578\u5B57\uFF0C\u6240\u4EE5\u300C\u4E0D\u8981\u300D\u7684\u5C31\u662FArray\u5927\u5C0F(\u6578\u76EE/\u9577\u5EA6)\u6E1B\u53BBk\u500B\u3002

### Python 
```python
	def maxScore(self, cardPoints: List[int], k: int) -> int:
        cardPoints.insert(0, 0)
        for i in range(1, len(cardPoints)):
            cardPoints[i] += cardPoints[i-1]
            
        sums = cardPoints[-1]
        
        interval = len(cardPoints)-k-1
        if interval==0: return sums
        
        result = cardPoints[interval]
        print(result)
        for i in range(1, len(cardPoints)-interval+1):
            result = min(result, cardPoints[i+interval-1]-cardPoints[i-1])
        
        return sums-result
```

### Kotlin
```kotlin
import kotlin.math.min
class Solution {
        fun maxScore(cardPoints: IntArray, k: Int): Int {
        val restNum = cardPoints.size - k
    cardPoints.forEachIndexed { i, _ ->
        if (i > 0)
            cardPoints[i] += cardPoints[i - 1]
    }
    val sum = cardPoints[cardPoints.lastIndex]
    if (restNum == 0) return sum

    var resultSum = cardPoints[restNum - 1]

    for (i in 1 until cardPoints.size - restNum+1) {
        resultSum = min(resultSum, cardPoints[i + restNum-1] - cardPoints[i - 1])
    }
    return sum - resultSum
    }
}
```

### C++
```C++
class Solution {
public:
    int maxScore(vector<int>& cardPoints, int k) {
        cardPoints.insert(cardPoints.begin(), 0);
        
        int interval = cardPoints.size() - k - 1;
        int size = cardPoints.size();
        
        for(int i=1; i<size; i++)
            cardPoints[i] += cardPoints[i-1];
        
        int sum = cardPoints[size-1];
        if(!interval) return sum;
        
        int result = cardPoints[interval];
        for(int i=1; i<size-interval+1; i++)
        {
             result = min(result, cardPoints[i+interval-1]- cardPoints[i-1]);
        }
        return sum-result;
    }
};
```