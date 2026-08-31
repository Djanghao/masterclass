# Assembly with explanation and comparison with C

**Author:** pcardenasb
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5309826/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5309826/)

---


# Rationale

I've solved this LeetCode problem using inline assembly in C. My goal isn't to showcase complexity, but rather to challenge myself and deepen my understanding of assembly language. 

As a beginner in assembly, I welcome any improvements or comments on my code.

Additionally, I aim to share insights on practicing assembly on LeetCode.

# Intuition

Iterate through all pair and check if `num1` is divisible by `(num2 * k)`

# Approach

Make two loops to iterate through all pairs. Use `mul` for multiplication and `div` for remainder. In this problem I have to use callee-saved register, so I have to push them to the stack. Use View [code](#assembly-code) comments for explanation.

# Complexity
- Time complexity: $$O(\	ext{nums1Size}\	imes\	ext{nums2Size})$$. Fortunately, $$\	ext{nums1Size}, \	ext{nums2Size} \\le 50$$.
- Space complexity: $$O(1)$$, I have to push 3 64bits register to stack.

# Assembly Code
This mixed block shows the C code with inline assembly and the assembly code.  View [Notes about assembly](#notes-about-assembly) for notes about the syntax used. Moreover, It shows the assembly code without comment for [comparision with C](#comparison-with-c). If you want to test this code you can [run locally](#run-locally).

```c [C (inline asm)]
int numberOfPairs(int* nums1, int nums1Size, int* nums2, int nums2Size, int k) {
	int ret;
	__asm__(
".intel_syntax noprefix\
"
"	## rdi: nums1\
"
"	## esi -> sil: 1 <=nums1Size <= 50\
"
"	## rdx: nums2 # will be replaced by r14\
"
"	## ecx -> cl: 1 <= nums2Size <= 50\
"
"	## r8 -> r8b: 1 <= k <= 50\
"
"	xor r9, r9					# loop counter for nums1\
"
"	xor r10, r10				# loop counter for nums2\
"
"	push r12					# temporal value that will be restored\
"
"	push r13					# Counter of good pairs (would be RAX\
"
"								# but will be overwriten by div)\
"
"	xor r13, r13\
"
"	\
"
"	push r14					# store nums2 because rdx is volatile\
"
"								# when using div\
"
"	mov r14, rdx\
"
"\
"
"\
"
"loop1:\
"
"	mov r11b, BYTE PTR[rdi+r9*4] # Get the current num1 in R11b\
"
"	xor r10b, r10b				 # Reset the loop counter for num2\
"
"loop2:\
"
"	mov al, BYTE PTR[r14+r10*4]	# Get the current num2 in AL\
"
"	mul r8b						# multiply by k. Then AX = k*num2\
"
"	mov r12w, ax				# R12w = k*num2\
"
"\
"
"	movzx ax, r11b				# Set AX = num1\
"
"	xor dx, dx					# Reset DX to 0 for division\
"
"	div r12w					# Divide DX:AX by R12w (num1/(k*num2))\
"
"\
"
"	test dx, dx					# Check if remainder (DX) is 0\
"
"	jnz not_divisor\
"
"	inc r13w					# if remainder is 0, increase R13\
"
"not_divisor:\
"
"	inc r10b					# loop2 update\
"
"	cmp r10b, cl				# loop2 condition\
"
"	jl loop2					# jump if loop2 condition\
"
"	\
"
"	inc r9b						# loop1 update\
"
"	cmp r9b, sil				# loop2 condition\
"
"	jl loop1					# jump if jump1 condition\
"
"\
"
"	movzx eax, r13w				# Assign R13w to EAX to return\
"
"epilog:\
"
"	pop r14\
"
"	pop r13\
"
"	pop r12\
"
".att_syntax\
"
		: "=a"(ret)
	);
	return ret;
}
```
```assembly [ASM (with comments)]
	.intel_syntax noprefix
	.globl  numberOfPairs

numberOfPairs:
	## rdi: nums1
	## esi -> sil: 1 <=nums1Size <= 50
	## rdx: nums2 ; will be replaced by r14
	## ecx -> cl: 1 <= nums2Size <= 50
	## r8 -> r8b: 1 <= k <= 50
	xor r9, r9					# loop counter for nums1
	xor r10, r10				# loop counter for nums2
	push r12					# temporal value that will be restored
	push r13					# Counter of good pairs (would be RAX
								# but will be overwriten by div)
	xor r13, r13
	
	push r14					# store nums2 because rdx is volatile
								# when using div
	mov r14, rdx


loop1:
	mov r11b, BYTE PTR[rdi+r9*4] # Get the current num1 in R11b
	xor r10b, r10b				 # Reset the loop counter for num2
loop2:
	mov al, BYTE PTR[r14+r10*4]	# Get the current num2 in AL
	mul r8b						# multiply by k. Then AX = k*num2
	mov r12w, ax				# R12w = k*num2

	movzx ax, r11b				# Set AX = num1
	xor dx, dx					# Reset DX to 0 for division
	div r12w					# Divide DX:AX by R12w (num1/(k*num2))

	test dx, dx					# Check if remainder (DX) is 0
	jnz not_divisor
	inc r13w					# if remainder is 0, increase R13
not_divisor:
	inc r10b					# loop2 update
	cmp r10b, cl				# loop2 condition
	jl loop2					# jump if loop2 condition
	
	inc r9b						# loop1 update
	cmp r9b, sil				# loop2 condition
	jl loop1					# jump if jump1 condition

	movzx eax, r13w				# Assign R13w to EAX to return
epilog:
	pop r14
	pop r13
	pop r12
	ret
```
```assembly [ASM (without comments)]
	.intel_syntax noprefix
	.globl  numberOfPairs

numberOfPairs:





	xor r9, r9
	xor r10, r10
	push r12
	push r13

	xor r13, r13
	
	push r14

	mov r14, rdx


loop1:
	mov r11b, BYTE PTR[rdi+r9*4]
	xor r10b, r10b
loop2:
	mov al, BYTE PTR[r14+r10*4]
	mul r8b
	mov r12w, ax

	movzx ax, r11b
	xor dx, dx
	div r12w

	test dx, dx
	jnz not_divisor
	inc r13w
not_divisor:
	inc r10b
	cmp r10b, cl
	jl loop2
	
	inc r9b
	cmp r9b, sil
	jl loop1

	movzx eax, r13w
epilog:
	pop r14
	pop r13
	pop r12
	ret
```
```assembly [ASM (without comments)]
	.intel_syntax noprefix
	.globl  numberOfPairs
numberOfPairs:
	xor r9, r9
	xor r10, r10
	push r12
	push r13
	xor r13, r13
	push r14
	mov r14, rdx
loop1:
	mov r11b, BYTE PTR[rdi+r9*4]
	xor r10b, r10b
loop2:
	mov al, BYTE PTR[r14+r10*4]
	mul r8b
	mov r12w, ax
	movzx ax, r11b
	xor dx, dx
	div r12w
	test dx, dx
	jnz not_divisor
	inc r13w
not_divisor:
	inc r10b
	cmp r10b, cl
	jl loop2
	inc r9b
	cmp r9b, sil
	jl loop1
	movzx eax, r13w
epilog:
	pop r14
	pop r13
	pop r12
	ret
```

# Notes about assembly

- This code is written Intel syntax using the `.intel_syntax noprefix` directive.
- This code uses `#` for comments because GAS (GNU Assembler) uses this syntax and Leetcode uses GCC for compiling.
- The reason I return from the "function" by jumping to the `.epilog` is that it's easier to remove everything after the `.epilog` to obtain the C code with inline assembly. I am aware that in assembly I can have multiple ret instructions in my "function", but in inline assembly I need to replace those `ret` instructions with a jump to the end of the inline assembly block.

# Comparison with C

This my solution using C and the assembly code generated by `gcc -S`. I removed unnecesary lines with the following shell command. I also generated the code with optimization level `-O0`, `-O1`, `-O2`, `-Os`, `-Oz` for comparison.

```bash
$ gcc -O2 -fno-asynchronous-unwind-tables -masm=intel -S code.c -o- | 
    sed '/^\\(.LCOLD\\|.LHOT\\|\\s*\\(\\.file\\|\\.type\\|\\.text\\|\\.p2align\\|\\.size\\|\\.ident\\|\\.section\\)\\)/d'
```

Note that the C code may use `restrict`s, `const`s and type castings in order to get optimized code. Moreover, after the generated assembly code, I have also included my solution using assembly without comments for comparison.

```C [-C code]
int numberOfPairs(const int* restrict nums1, const char nums1Size, const int* restrict nums2, const char nums2Size, const char k) {
	unsigned short res = 0;
	for (char i = 0; i < nums1Size; i++) {
		char x = nums1[i];
		for (char j = 0; j < nums2Size; j++) {
			if (x % (((char) nums2[j]) * k) == 0) {
				res++;
			}
		}
	}
	return res;
}
```
```assembly [-gcc -O0]
	.intel_syntax noprefix
	.globl	numberOfPairs
numberOfPairs:
	push	rbp
	mov	rbp, rsp
	mov	QWORD PTR -24[rbp], rdi
	mov	QWORD PTR -40[rbp], rdx
	mov	eax, ecx
	mov	ecx, r8d
	mov	edx, esi
	mov	BYTE PTR -28[rbp], dl
	mov	BYTE PTR -32[rbp], al
	mov	eax, ecx
	mov	BYTE PTR -44[rbp], al
	mov	WORD PTR -2[rbp], 0
	mov	BYTE PTR -5[rbp], 0
	jmp	.L2
.L6:
	movsx	rax, BYTE PTR -5[rbp]
	lea	rdx, 0[0+rax*4]
	mov	rax, QWORD PTR -24[rbp]
	add	rax, rdx
	mov	eax, DWORD PTR [rax]
	mov	BYTE PTR -3[rbp], al
	mov	BYTE PTR -4[rbp], 0
	jmp	.L3
.L5:
	movsx	eax, BYTE PTR -3[rbp]
	movsx	rdx, BYTE PTR -4[rbp]
	lea	rcx, 0[0+rdx*4]
	mov	rdx, QWORD PTR -40[rbp]
	add	rdx, rcx
	mov	edx, DWORD PTR [rdx]
	movsx	ecx, dl
	movsx	edx, BYTE PTR -44[rbp]
	mov	edi, edx
	imul	edi, ecx
	cdq
	idiv	edi
	mov	ecx, edx
	mov	eax, ecx
	test	eax, eax
	jne	.L4
	movzx	eax, WORD PTR -2[rbp]
	add	eax, 1
	mov	WORD PTR -2[rbp], ax
.L4:
	movzx	eax, BYTE PTR -4[rbp]
	add	eax, 1
	mov	BYTE PTR -4[rbp], al
.L3:
	movzx	eax, BYTE PTR -4[rbp]
	cmp	al, BYTE PTR -32[rbp]
	jl	.L5
	movzx	eax, BYTE PTR -5[rbp]
	add	eax, 1
	mov	BYTE PTR -5[rbp], al
.L2:
	movzx	eax, BYTE PTR -5[rbp]
	cmp	al, BYTE PTR -28[rbp]
	jl	.L6
	movzx	eax, WORD PTR -2[rbp]
	pop	rbp
	ret
```
```assembly [-gcc -O1]
	.intel_syntax noprefix
	.globl	numberOfPairs
numberOfPairs:
	test	sil, sil
	jle	.L7
	push	r12
	push	rbp
	push	rbx
	mov	rbx, rdx
	mov	ebp, ecx
	mov	r11, rdi
	movsx	rsi, sil
	lea	r12, [rdi+rsi*4]
	movsx	rcx, cl
	lea	r10, [rdx+rcx*4]
	mov	r9d, 0
	movsx	r8d, r8b
.L6:
	movzx	edi, BYTE PTR [r11]
	test	bpl, bpl
	jle	.L3
	mov	rsi, rbx
	movsx	edi, dil
.L5:
	movsx	ecx, BYTE PTR [rsi]
	imul	ecx, r8d
	mov	eax, edi
	cdq
	idiv	ecx
	cmp	edx, 1
	adc	r9w, 0
	add	rsi, 4
	cmp	rsi, r10
	jne	.L5
.L3:
	add	r11, 4
	cmp	r11, r12
	jne	.L6
	movzx	eax, r9w
	pop	rbx
	pop	rbp
	pop	r12
	ret
.L7:
	mov	r9d, 0
	movzx	eax, r9w
	ret
```
```assembly [-gcc -O2]
	.intel_syntax noprefix
	.globl	numberOfPairs
numberOfPairs:
	test	sil, sil
	jle	.L9
	mov	eax, ecx
	movsx	rsi, sil
	movsx	rcx, cl
	push	rbp
	mov	r10, rdx
	push	rbx
	lea	rbp, [rdi+rsi*4]
	mov	rbx, rdi
	lea	r11, [rdx+rcx*4]
.L8:
	test	al, al
	jg	.L17
	add	rbx, 4
	cmp	rbx, rbp
	jne	.L8
	xor	r9d, r9d
.L6:
	movzx	eax, r9w
	pop	rbx
	pop	rbp
	ret
.L17:
	movsx	edi, BYTE PTR [rbx]
	xor	r9d, r9d
	movsx	r8d, r8b
.L7:
	mov	rsi, r10
.L5:
	movsx	ecx, BYTE PTR [rsi]
	mov	eax, edi
	cdq
	imul	ecx, r8d
	idiv	ecx
	cmp	edx, 1
	adc	r9w, 0
	add	rsi, 4
	cmp	r11, rsi
	jne	.L5
	add	rbx, 4
	cmp	rbp, rbx
	je	.L6
	movsx	edi, BYTE PTR [rbx]
	jmp	.L7
.L9:
	xor	eax, eax
	ret
```
```assembly [-gcc -Os]
	.intel_syntax noprefix
	.globl	numberOfPairs
numberOfPairs:
	push	r12
	mov	r10d, esi
	mov	r11, rdi
	xor	esi, esi
	push	rbp
	movsx	r8d, r8b
	mov	ebp, ecx
	xor	ecx, ecx
	push	rbx
	mov	rbx, rdx
.L2:
	cmp	r10b, sil
	jle	.L9
	movsx	r12d, BYTE PTR [r11+rsi*4]
	xor	edi, edi
.L3:
	cmp	bpl, dil
	jle	.L10
	movsx	r9d, BYTE PTR [rbx+rdi*4]
	mov	eax, r12d
	cdq
	imul	r9d, r8d
	idiv	r9d
	cmp	edx, 1
	adc	cx, 0
	inc	rdi
	jmp	.L3
.L10:
	inc	rsi
	jmp	.L2
.L9:
	pop	rbx
	movzx	eax, cx
	pop	rbp
	pop	r12
	ret
```
```assembly [-gcc -Oz]
	.intel_syntax noprefix
	.globl	numberOfPairs
numberOfPairs:
	push	r12
	mov	r10d, esi
	mov	r11, rdi
	xor	esi, esi
	push	rbp
	movsx	r8d, r8b
	mov	ebp, ecx
	xor	ecx, ecx
	push	rbx
	mov	rbx, rdx
.L2:
	cmp	r10b, sil
	jle	.L9
	movsx	r12d, BYTE PTR [r11+rsi*4]
	xor	edi, edi
.L3:
	cmp	bpl, dil
	jle	.L10
	movsx	r9d, BYTE PTR [rbx+rdi*4]
	mov	eax, r12d
	cdq
	imul	r9d, r8d
	idiv	r9d
	cmp	edx, 1
	adc	cx, 0
	inc	rdi
	jmp	.L3
.L10:
	inc	rsi
	jmp	.L2
.L9:
	pop	rbx
	movzx	eax, cx
	pop	rbp
	pop	r12
	ret
```
```assembly [-my ASM]
	.intel_syntax noprefix
	.globl  numberOfPairs
numberOfPairs:
	xor r9, r9
	xor r10, r10
	push r12
	push r13
	xor r13, r13
	push r14
	mov r14, rdx
loop1:
	mov r11b, BYTE PTR[rdi+r9*4]
	xor r10b, r10b
loop2:
	mov al, BYTE PTR[r14+r10*4]
	mul r8b
	mov r12w, ax
	movzx ax, r11b
	xor dx, dx
	div r12w
	test dx, dx
	jnz not_divisor
	inc r13w
not_divisor:
	inc r10b
	cmp r10b, cl
	jl loop2
	inc r9b
	cmp r9b, sil
	jl loop1
	movzx eax, r13w
epilog:
	pop r14
	pop r13
	pop r12
	ret
```


# Run locally

Compile locally the assembly code with GAS or the inline assembly with GCC.

```bash
$ as -o code.o assembly_code.s
$ # or
$ gcc -c -o code.o c_with_inline_assembly_code.c 
```

Then, create a `main.c` file with the function prototype. Here you can include your tests.

```c
/* main.c */

int numberOfPairs(int* nums1, int nums1Size, int* nums2, int nums2Size, int k);

int main(int argc, const char *argv[]) {
    // Use numberOfPairs function
    return 0;
}
```

Then, compile `main.c` and link to create the executable

```bash
$ gcc main.c code.o -o main
```

Finally, execute

```bash
$ ./main
```

