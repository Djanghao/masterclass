# 0 ms 100%, 0 mb 100% ,Im boss ,very fast solution ,low memory :D

**Author:** LightLM
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/3706238/](https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/3706238/)

---

Ez for me

# Code
```
func reverse(x string) string{
    new := ""
    for i, _ := range x{
        new += string(x[len(x)-1-i])
    }
    return new
}
func kMirror(k int, n int) int64 {
    count := 1
    sum := 0
    counter_2 := 0
    for true{
        tr := strconv.Itoa(count) 
        len_tr := len(tr)
        if len_tr>3 && tr[1]!= tr[len_tr-2]{
            count += 10
            continue
        } 
        if len_tr>5 && tr[2]!= tr[len_tr-3]{
            count += 100
            continue
        } 
        if len_tr>7 && tr[3]!= tr[len_tr-4]{
            count += 1000
            continue
        }
        if len_tr>9 && tr[4]!= tr[len_tr-5]{
            count += 10000
            continue
        } 
        
        if string(tr[len_tr-1])=="0" || len_tr>1 && tr[0]!= tr[len_tr-1] || len_tr>3 && tr[1]!= tr[len_tr-2] || len_tr>5 && tr[2]!= tr[len_tr-3] || len_tr>7 && tr[3]!= tr[len_tr-4] || len_tr>9 && tr[4]!= tr[len_tr-5] {
            count += 1
            continue
        }
        num_enemy := strconv.FormatInt(int64(count), k)
        len_enemy := len(num_enemy)
        if string(num_enemy[len_enemy-1])=="0" || len_enemy>1 && num_enemy[0]!=num_enemy[len_enemy-1] || len_enemy>3 && num_enemy[1]!=num_enemy[len_enemy-2] || len_enemy>5 && num_enemy[2]!=num_enemy[len_enemy-3] || len_enemy>7 && num_enemy[3]!=num_enemy[len_enemy-4] || len_enemy>9 && num_enemy[4]!=num_enemy[len_enemy-5] {
           count += 1
           continue
        }
        if tr==reverse(tr) {
            if num_enemy==reverse(num_enemy){
            counter_2 += 1
            sum += count
            }
            if counter_2==n{
                break
            }
            
        }
        count += 1
    }
    return int64(sum)
}
```