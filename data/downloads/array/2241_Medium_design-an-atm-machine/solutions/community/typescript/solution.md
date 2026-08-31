# Typescript Solution

**Author:** neha150498
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/4552631/](https://leetcode.com/problems/design-an-atm-machine/solutions/4552631/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To keep the note count in order gien in the question.
for Deposit: Simply increasing the count
For withdrawal: Just start deduction from the biggest note if possible.
If amount is getting 0 it means notes are available o/w not.

# Approach
<!-- Describe your approach to solving the problem. -->
Same as mentioned above

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Deposit - O(n)
Withdrawl - O(n)
Overall - O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - Taken array of size 5 which is constant

# Code
```
class ATM {
    bankNotes: number[];
    constructor() {
        this.bankNotes = new Array(5).fill(0);
    }

    deposit(banknotesCount: number[]): void {
        banknotesCount.map((note:number, index:number)=>{
            this.bankNotes[index] += note;
        })
    }

    withdraw(amount: number): number[] {
        let withDrawNotes: number[] = new Array(5).fill(0);
        let notesAvailable: boolean = true;
        let copyBankNotes:number[] = [...this.bankNotes];

        // Implement whether notes available or not logic
        for(let i = this.bankNotes.length-1; i >=0; i--){
            let currentNote: number;
            switch(i){
                case 0: currentNote =20; break;
                case 1: currentNote = 50; break;
                case 2: currentNote = 100; break; 
                case 3: currentNote = 200; break;
                case 4: currentNote = 500; break;
            }            
            if(amount >= currentNote){
                let noteCount: number = Math.floor(amount/currentNote);

                if(noteCount <= copyBankNotes[i]){
                    amount -= noteCount*currentNote;
                    copyBankNotes[i] -= noteCount;
                    withDrawNotes[i] = noteCount;
                }else if(noteCount >copyBankNotes[i]){
                    amount -= copyBankNotes[i]* currentNote;
                    withDrawNotes[i] = copyBankNotes[i];
                    copyBankNotes[i] =0;
                }
            }
        }
        if( amount ===0){
            this.bankNotes = [...copyBankNotes];
        }
        return  amount === 0 ? withDrawNotes : [-1];
        
    }
}

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
```