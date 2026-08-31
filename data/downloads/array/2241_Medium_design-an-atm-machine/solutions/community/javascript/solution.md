# [Javascript] Straight forward solution with temp bankNotes variable

**Author:** annietran
**Votes:** 6
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/1953684/](https://leetcode.com/problems/design-an-atm-machine/solutions/1953684/)

---

My collection for javascript solutions: https://github.com/toantd90/leetcode-js-solutions

Tricky part here is when we withdraw bank

I used a temp variable, if we are **able** to make the withdraw ( remainAmount === 0 ) then we **apply** the change to bankNotes. Otherwise, we return [-1] and keep bankNotes same as before

```

var ATM = function() {
    this.bankNotes = new Array(5).fill(0)
    this.banksNotesValue = [20, 50, 100, 200, 500]
};

/** 
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function(banknotesCount) {
    for (let i = 0; i < 5; i++) {
       this.bankNotes[i] += banknotesCount[i] 
    }
    return this.bankNotes
};

/** 
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function(amount) {
    let remain = amount
    let usedBankNotes = new Array(5).fill(0)
    let temp = [...this.bankNotes]
    for (let i = 4; i >= 0; i--) {
        if (temp[i] > 0 && remain >= this.banksNotesValue[i]) {
            const bankNote = Math.floor(remain / this.banksNotesValue[i])
            const maxCanUse = Math.min(temp[i], bankNote)
            usedBankNotes[i] = maxCanUse
            temp[i] -= maxCanUse
            
            remain -= maxCanUse * this.banksNotesValue[i]
        }
    }
    
    if (remain > 0) {
        return [-1]
    } else {
        this.bankNotes = temp
        return usedBankNotes
    }
};

/** 
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
```