# Tests

Thư mục test tách riêng, mirror cấu trúc `src/` để dễ quản lý và tìm file test tương ứng.

## Cấu trúc

```
tests/
├── utils/           # Unit test cho utils (formatCurrency, parseAmount, …)
│   ├── formatCurrency.spec.ts
│   ├── parseAmount.spec.ts
│   ├── getTotalMonths.spec.ts
│   └── formatMonthYear.spec.ts
├── components/      # Component test (AmountInput, ReachDateInput, …)
│   ├── AmountInput.spec.ts
│   ├── ReachDateInput.spec.ts
│   ├── SavingsCard.spec.ts
│   └── SuccessModal.spec.ts
└── README.md
```

## Chạy test

- `npm run test` — chạy test ở chế độ watch
- `npm run test:run` — chạy test một lần

Vitest được cấu hình trong `vitest.config.ts` với `include: ['tests/**/*.spec.ts']`.
