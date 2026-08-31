# C# SemaphoreSlim Array

**Author:** olegbelousov77
**Votes:** 4
**Link:** [https://leetcode.com/problems/fizz-buzz-multithreaded/solutions/1590626/](https://leetcode.com/problems/fizz-buzz-multithreaded/solutions/1590626/)

---

```csharp
using System.Threading;

public class FizzBuzz {
    
    private enum FizzBuzzEnum {
        Fizz = 0,
        Buzz = 1,
        FizzBuzz = 2,
        Number = 3
    }
    
    private int _n;
    private int _k;
    private SemaphoreSlim[] _semaphores;
    private CancellationTokenSource _cts;

    public FizzBuzz(int n) {
        _n = n;
        _k = 0;
        _semaphores = Enum
            .GetValues<FizzBuzzEnum>()
            .Select(v => new SemaphoreSlim(0,1))
            .ToArray();
        _cts = new CancellationTokenSource();
        _semaphores[(int)GetFizzBuzz(++_k)].Release();
    }

    public void Fizz(Action printFizz) => 
        Execute(FizzBuzzEnum.Fizz, printFizz);

    public void Buzz(Action printBuzz)  => 
        Execute(FizzBuzzEnum.Buzz, printBuzz);

    public void Fizzbuzz(Action printFizzBuzz)   => 
        Execute(FizzBuzzEnum.FizzBuzz, printFizzBuzz);

    public void Number(Action<int> printNumber)   => 
        Execute(FizzBuzzEnum.Number, () => printNumber(_k));
    
    private void Execute(FizzBuzzEnum fizzbuzz, Action action) {
        try {
            while (_k <= _n) {
                _semaphores[(int)fizzbuzz].Wait(_cts.Token);
                if (_k <= _n) {
                    action();
                    _semaphores[(int)GetFizzBuzz(++_k)].Release();
                }
            }
            _cts.Cancel();
        } catch (OperationCanceledException) {
            
        }
    }
    
    private FizzBuzzEnum GetFizzBuzz(int i) {
        if (i % 3 == 0 && i % 5 == 0)
            return FizzBuzzEnum.FizzBuzz;
        if (i % 3 == 0 && i % 5 != 0)
            return FizzBuzzEnum.Fizz;
        if (i % 3 != 0 && i % 5 == 0)
            return FizzBuzzEnum.Buzz;
        return FizzBuzzEnum.Number;
    }
}
```