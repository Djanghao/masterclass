# GOOD SOLUTION ON JAVA,PYTHON,RUBY  WITH SET!😵

**Author:** char1ks
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/5420472/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/5420472/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
```Java []
class Solution {
    public static int[] sumZero(int n) {
        int[]mas=new int[n];
        int index=0;
        int num=1;
        if(n%2!=0) {
            mas[index]=0;
            index++;
        }
        for (int i = index; i < n; i+=2) {
            mas[i]=num;
            mas[i+1]=-(num);
            num++;
        }
        
        return mas;
    }
}

```
```python []
def sum_zero(n):
    # \u0421\u043E\u0437\u0434\u0430\u0435\u043C \u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0446\u0435\u043B\u044B\u0445 \u0447\u0438\u0441\u0435\u043B
    mas = [0] * n
    index = 0
    num = 1

    # \u0415\u0441\u043B\u0438 n \u043D\u0435\u0447\u0435\u0442\u043D\u043E\u0435, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C 0 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432 \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u043C \u0438\u043D\u0434\u0435\u043A\u0441
    if n % 2 != 0:
        mas[index] = 0
        index += 1

    # \u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u043C\u0430\u0441\u0441\u0438\u0432 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0447\u0438\u0441\u043B\u0430\u043C\u0438, \u0441\u0443\u043C\u043C\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0430\u0432\u043D\u0430 0
    for i in range(index, n, 2):
        mas[i] = num
        mas[i + 1] = -(num)
        num += 1

    return mas
```
```ruby []
def sum_zero(n)
  # \u0421\u043E\u0437\u0434\u0430\u0435\u043C \u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0446\u0435\u043B\u044B\u0445 \u0447\u0438\u0441\u0435\u043B
  mas = Array.new(n, 0)
  index = 0
  num = 1

  # \u0415\u0441\u043B\u0438 n \u043D\u0435\u0447\u0435\u0442\u043D\u043E\u0435, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C 0 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432 \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u043C \u0438\u043D\u0434\u0435\u043A\u0441
  if n % 2 != 0
    mas[index] = 0
    index += 1
  end

  # \u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u043C\u0430\u0441\u0441\u0438\u0432 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0447\u0438\u0441\u043B\u0430\u043C\u0438, \u0441\u0443\u043C\u043C\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0430\u0432\u043D\u0430 0
  (index...n).step(2) do |i|
    mas[i] = num
    mas[i + 1] = -(num)
    num += 1
  end

  return mas
end
```