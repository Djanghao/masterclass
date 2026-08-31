# Easy go golang solution with arrays | best run 213 ms

**Author:** okarademirci
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/1954091/](https://leetcode.com/problems/design-an-atm-machine/solutions/1954091/)

---

```
type ATM struct {
    Banknotes [5]int
    Money [5]int
}


func Constructor() ATM {
    return ATM{
        Banknotes: [5]int{20,50,100,200,500},
        Money: [5]int{},
    }
}

func (this *ATM) Deposit(banknotesCount []int)  {
    for i,v := range banknotesCount{
        this.Money[i] += v 
    }
}

func (this *ATM) Withdraw(amount int) []int {
    temp := this.Money
    res := make([]int,5)
    for i := 4; i>=0; i--{
        if(temp[i] > 0 && amount >= this.Banknotes[i]){
            count := (amount / this.Banknotes[i])
            res[i] = min(count,temp[i])
            temp[i] -= res[i]
            amount -= res[i] * this.Banknotes[i]
        }
    }    
    if amount != 0{
        return []int{-1}
    }
    this.Money = temp
    return res
}

func min(n1,n2 int) int{
    if(n1 > n2){
        return n2
    }else{
        return n1
    }
}