# Ruby faster than 100.00% of Ruby online submissions for Count Good Triplets

**Author:** Vucius
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-good-triplets/solutions/1159364/](https://leetcode.com/problems/count-good-triplets/solutions/1159364/)

---

def count_good_triplets(arr, a, b, c)
    res = 0
    len = arr.length
    for i in 0...len-2
        for k in i+1...len
            next if ((arr[i] - arr[k]).abs > c)
            res += arr[i+1...k].select{|x| (arr[i] - x).abs <= a && (x - arr[k]).abs <= b}.length
        end
    end
    res
end