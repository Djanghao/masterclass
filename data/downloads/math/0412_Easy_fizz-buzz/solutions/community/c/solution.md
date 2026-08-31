# Solution in C with explanation in detail

**Author:** mpagani
**Votes:** 47
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/2685173/](https://leetcode.com/problems/fizz-buzz/solutions/2685173/)

---

Do upvote if you like the solution to keep me motivated \uD83D\uDE0A\u270C
```
char ** fizzBuzz(int n, int* returnSize)
{
    int i;
    *returnSize = n; // since n = number of elements to be returned
    char **answer; // the string of strings where the right elements will be copied
    char str[5]; // every string contains at most 5 character (max number is 10000 => 5 characters)
    
    i = 1; // first number we want to return is 1
    answer = NULL;
    answer = malloc(sizeof(*answer) * n); // our string of strings will have the same number of element than the returning one (n)
    if (!answer)
        return (answer); // securizing our malloc => returning NULL if something went wrong
    while (i <= n)
    {
        if (i % 15 == 0)
            answer[i - 1] = strdup("FizzBuzz"); // NB we need to start duplicating from position 0 => (i - 1)
        else if (i % 3 == 0)
            answer[i - 1] = strdup("Fizz");
        else if (i % 5 == 0)
            answer[i - 1] = strdup("Buzz");
        else
        {
            sprintf(str, "%d", i); // converting integer i into char and storing it in str
            answer[i - 1] = strdup(str);
        }
        i++;
    }
    return (answer);
}
```