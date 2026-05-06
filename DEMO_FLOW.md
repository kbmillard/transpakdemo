# TransPak AI Command Center Demo Flow

This repo includes a **demo-only** TransPak AI Command Center + ScanFlow experience using **local seeded data** and **browser localStorage** for demo interactions. It is not connected to live TransPak systems.

## Quick walkthrough

1. Open `/command-center` and scan the executive dashboard sections (leads, quotes, jobs, documents, shipments, ScanFlow updates).
2. Review **Public lead intelligence** (clearly labeled public research — verify before outreach).
3. Open the **Quote intake queue** and use local action buttons (saved in your browser only).
4. Open `/qr` and use printed or on-screen QR codes to navigate to live demo routes.
5. Scan or navigate to `/jobs/TPK-1001` (or tap **Scan TPK-1001** from `/scanflow/scanner`).
6. On the job page, use **ScanFlow actions**: change status, add a note/optional photo filename, generate an AI summary, and **Save update**.
7. Open `/customer-updates/TPK-1001`, copy the customer-ready draft, and mark approval locally.
8. Open `/portal/CUST-001` to view the read-only customer portal example.
9. Return to `/command-center` and confirm **Recent ScanFlow updates** shows your saved update.
10. Open `/demo/quote-to-shop` for the guided quote-to-shop storyboard.

## Honest positioning

- Human approval remains part of the workflow in real deployments.
- QR routes point to **public demo pages** in this deployment — replace with approved internal URLs when connecting real systems.
