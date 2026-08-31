<p>You are given two integers <code>n</code> and <code>m</code>.</p>

<p>You have to select a multiset of <strong><span data-keyword="prime-number">prime numbers</span></strong> from the <strong>first</strong> <code>m</code> prime numbers such that the sum of the selected primes is <strong>exactly</strong> <code>n</code>. You may use each prime number <strong>multiple</strong> times.</p>

<p>Return the <strong>minimum</strong> number of prime numbers needed to sum up to <code>n</code>, or -1 if it is not possible.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 10, m = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">4</span></p>

<p><strong>Explanation:</strong></p>

<p>The first 2 primes are [2, 3]. The sum 10 can be formed as 2 + 2 + 3 + 3, requiring 4 primes.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 15, m = 5</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>The first 5 primes are [2, 3, 5, 7, 11]. The sum 15 can be formed as 5 + 5 + 5, requiring 3 primes.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 7, m = 6</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The first 6 primes are [2, 3, 5, 7, 11, 13]. The sum 7 can be formed directly by prime 7, requiring only 1 prime.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
	<li><code>1 &lt;= m &lt;= 1000</code></li>
</ul>
