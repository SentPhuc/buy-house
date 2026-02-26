# Origin Take-Home – Review checklist

Review so với [Origin Frontend Take-Home Assignment](https://www.figma.com/design/1MCzMLwl7AWTJd6FI1lVeF/).

---

## ✅ Requirement

| Yêu cầu                                          | Trạng thái | Ghi chú                                                                |
| ------------------------------------------------ | ---------- | ---------------------------------------------------------------------- |
| Screen "Buy a house" savings goal                | ✅         | `SavingsCard.vue`, title + icon                                        |
| Input **Total amount**                           | ✅         | `AmountInput.vue`, v-model `sim.amount`                                |
| Input **Reach goal by**                          | ✅         | `ReachDateInput.vue`, `sim.reachMonth` / `sim.reachYear`               |
| **Monthly amount** = Total amount / Total months | ✅         | `useSavingsSimulation.ts` – `monthlyAmount` computed                   |
| Confirm → modal tóm tắt "set successfully"       | ✅         | `SuccessModal.vue` – Goal, Total amount, Reach goal by, Monthly amount |

---

## ✅ Development instructions

### Total amount (tên gợi ý: `amount`)

- Chỉ cho phép số | ✅ | `stripToNumeric` + `parseAmount` trong `AmountInput.vue` |
- Hiển thị format tiền (vd 3500.45 → 3,500.45) | ✅ | `formatCurrency` on blur + display |
- Tên input `amount` | ✅ | `id="amount"`, state `sim.amount` |

### Reach goal by (tên gợi ý: `reachDate`)

- Chỉ tháng tương lai | ✅ | `isFutureOrCurrentMonth`, `canGoPrev()` chặn quá khứ |
- Nút mũi tên tăng/giảm từng tháng | ✅ | `prev()` / `next()` trên 2 button |
- Khi focus, phím Left/Right đổi tháng | ✅ | `onKeydown` trên cả 2 button (focus trên button) |
- Tên `reachDate` | ✅ | `id="reachDate"` trên fieldset |

### Monthly amount

- Công thức Total amount / Total months | ✅ | `getTotalMonths()` từ "now" → reach month/year; `monthlyAmount = amount / totalMonths` |

### Confirm

- Modal tóm tắt thông tin đã set thành công | ✅ | Success modal: Goal, Total amount, Reach goal by, Monthly amount + nút OK |

---

## ✅ Evaluation criteria (Origin)

| Tiêu chí                       | Trạng thái                                                                                                                               |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Gần mockups (desktop + mobile) | ✅ Layout 560px card, grid 272px+1fr desktop / stack mobile, design tokens (Figma), link Figma trong README                              |
| Code gọn, có tổ chức           | ✅ Cấu trúc rõ: components, composables, utils; ESLint + Prettier                                                                        |
| Automated tests chất lượng     | ✅ Unit: formatCurrency, parseAmount, getTotalMonths, formatMonthYear. Component: AmountInput, ReachDateInput, SavingsCard, SuccessModal |
| Business rules đúng            | ✅ Chỉ số cho amount, format tiền, chỉ tháng tương lai, công thức monthly, modal tóm tắt                                                 |

---

## Delivery

- **GitHub:** Commit source + docs, repo **public** – làm khi nộp bài.
- README có: install, dev, build, test, lint/format, mô tả tính năng, link Figma.

---

## Optional / đã có

- Design tokens: `src/style.css` @theme (màu, font, shadow, radius).
- A11y: fieldset+legend cho reach date, aria-label cho button, role dialog cho modal.
- Tests trong `tests/` (utils + components).
