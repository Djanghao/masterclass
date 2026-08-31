# [C#] SemaphoreSlim based solution

**Author:** maksim-sovkov
**Votes:** 2
**Link:** [https://leetcode.com/problems/print-zero-even-odd/solutions/1886329/](https://leetcode.com/problems/print-zero-even-odd/solutions/1886329/)

---

```csharp
using System.Threading;

public class ZeroEvenOdd
{
    private int n;
    
    private SemaphoreSlim zeroLock = new SemaphoreSlim(1, 1);
    private SemaphoreSlim evenLock = new SemaphoreSlim(0, 1);
    private SemaphoreSlim oddLock = new SemaphoreSlim(0, 1);
    
    public ZeroEvenOdd(int n)
    {
        this.n = n;
    }

    public void Zero(Action<int> printNumber)
    {
        for (var i = 1; i <= n; i++)
        {
            zeroLock.Wait();
            printNumber(0);
            
            if (i % 2 == 0)
            {
                evenLock.Release();
            }
            else
            {
                oddLock.Release();
            }
        }
    }

    public void Even(Action<int> printNumber)
    {
        for (var i = 2; i <= n; i += 2)
        {
            evenLock.Wait();
            printNumber(i);
            zeroLock.Release();
        }
    }

    public void Odd(Action<int> printNumber)
    {
        for (var i = 1; i <= n; i += 2)
        {
            oddLock.Wait();
            printNumber(i);
            zeroLock.Release();
        }
    }
}
```