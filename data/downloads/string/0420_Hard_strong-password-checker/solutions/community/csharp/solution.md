# Verbose but hopefully helpful C# implementation

**Author:** ericktberg
**Votes:** 2
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/3027211/](https://leetcode.com/problems/strong-password-checker/solutions/3027211/)

---

# Intuition
I knew that the complexity of the problem lay in operations overlapping one another. At some point I realized that the missing characters would be easy to resolve, but the repeating characters would be the real difficulty. As I was laying out the patterns for resolving triplets, I figured that the output from one operation would essentially be the input to the next until it was resolved.

# Approach
My approach is clearly not the most efficient in LOC, time, or memory. I wanted to keep it simple and easy to understand in practical terms what each operation was doing without fussing about efficiency. You could call mine a naive approach.

Since the complex portion is the repeating characters, most of the code is dedicated to handling them. First I pre-process the string to identify all of the original repeating sequences. This pre-processing is then used when meeting length requirements and then the results of that are finally reduced down to a state where there all other criteria are met.

In general, a simple computation could replace my iterative counting. A block of (3n + x) requires n convert operations to fully reduce. For consistency with the previous section, I maintained its format. This would be the first target of optimization.

# Code
```
public class Solution {


    // It's easier to write this if I can update a reference, so here it is!
    // Define some of the methods on here for simplicity's sake.
    public class RepeatBlock {
        public RepeatBlock(int count) {
            Count = count;
        }

        public int Count { get; private set; }

        public void Convert() {
            Count -= 3;
        }

        public  void Add() {
            Count -= 2;
        }

        public void  Delete() {
            Count -= 1;
        }
        
        public bool IsBad() {
            return Count >= 3;
        }

        public int AddPriority() {
            // This will subtract by 2. Therefore we want something that will be valid after a single operation or be converted to something that subtracting by multiples of 3 will fix.
            return (Count + 1) % 3;
        }

        public int DeletePriority() {
            // Only when we have a multiple of 3 should we target delete
            return Count % 3;
        }
    }

    public int StrongPasswordChecker(string password) {
        // Assume that we have to add all 3 criteria if not found explicitly.
        int digitOperations = 1;
        int upperOperations = 1;
        int lowerOperations = 1;

        // Operations for triplets are the hard part.
        // 3: aaa
        //  Convert -> aba
        //  Add     -> aaba
        //  Delete  -> aa
        // 4: aaaa
        //  Convert -> aaba
        //  Add     -> aabaa
        //  Delete + [3]
        // 5: aaaaa
        //  Convert -> aabaa
        //  Add + [3]   -> aabaaa
        //  Delete + [4]
        // 6: aaaaaa
        //  Convert + [3] -> aabaaa
        //  Add + [4]     -> aabaaaa
        //  Delete + [5]
        // 7: aaaaaaa
        //  Convert + [4] -> aabaaaa
        //  Add + [5]     -> aabaaaaa
        // ----
        // This is a recursive process. Convert does a -3, Add does a -2, and delete does a -1 to my sequence.
        // I want to use the highest value process when fixing my triplets.
        // If I have a remainder 3 after my operations then deleting becomes an option.
        // 6 repeated characters I could convert then delete to resolve.
        // And in the extended case 15 characters can be 1 delete + 4 conversions. => 15 - 13 = 2
        int currentCount = 1;
        // Hopefully we don't encounter this character! Find another character or make this nullable otherwise
        char last = '\\0';  

        List<RepeatBlock> repeatCounts = new();
        for (int i = 0; i < password.Length; i++) {
            char current = password[i];

            if (current == last) {
                // We are repeating characters. Count how many!
                currentCount++;
            }
            else {
                // Our sequence is over. If we've got a triplet or more, register it.
                // Otherwise, simply reset the count
                if (currentCount >= 3) {
                    repeatCounts.Add(new RepeatBlock(currentCount));
                }
                currentCount = 1;
            }

            // Don't forget to update our comparison
            last = current;

            // We could do this elsewhere, but I figure we might as well check in this loop
            if (char.IsDigit(current)) {
                digitOperations = 0;
            }
            else if (char.IsUpper(current)) {
                upperOperations = 0;
            }
            else if (char.IsLower(current)) {
                lowerOperations = 0;
            }
        }

        // If we end with a repeat grab it
        if (currentCount >= 3) {
            repeatCounts.Add(new RepeatBlock(currentCount));
        }

        // Keep track of 
        int operationCount = 0;

        // These are all pretty much the same. We will need to convert or add these in at some point
        int missingCharOperations = digitOperations + upperOperations + lowerOperations;

        // For the next two cases, we have to add or delete from our blocks
        // In some cases, there will be multiple blocks to target and we must decide between them.
        // After modifying a block, that order may change!
        // For example, when we delete, we want to delete from a block size of 3n since that requires n operations, and delete can be one of them.
        // If there are no blocks of size 3n, then we prefer one with 3n + 1 because that transforms our block into one of size 3n.
        if (password.Length > 20) {
            int removeOperations = password.Length - 20;
            // Remove from repeated characters as much as possible
            // If any of the repeated characters have a multiple of 3, do that, otherwise delete from the same block
            while (removeOperations-- > 0) {
                var block = repeatCounts.Where(r => r.IsBad()).OrderBy(r => r.DeletePriority()).FirstOrDefault();
                // If there are no bad blocks, then we are simply deleting to delete.
                // In either case, this will not affect the minimum criteria character wise
                block?.Delete();
                operationCount++;
            }
        }
        else if (password.Length < 6) {
            int addOperations = 6 - password.Length;
            // Add to repeated characters as much as possible.
            // If there are character types to add, then do that too.
            while (addOperations-- > 0) {
                var block = repeatCounts.Where(r => r.IsBad()).OrderBy(r => r.AddPriority()).FirstOrDefault();
                // If there are no bad blocks, then we are simply adding to add.
                block?.Add();
                // In either case, we will be adding a missing character if we need to.
                missingCharOperations--;
                operationCount++;
            }
        }

        // After resolving our password length criteria, we want to resolve the repeating blocks
        // Converting is the simplest option and we've already resolved our need to add or subtract characters.
        foreach (var block in repeatCounts) {
            while (block.IsBad()) {
                block.Convert();
                missingCharOperations--;
                operationCount++;
            }
        }

        // Finally, and this has likely been handled elsewhere,
        // resolve the missing character operations.
        while (missingCharOperations > 0) {
            missingCharOperations--;
            operationCount++;
        }

        return operationCount;
    }
}
```