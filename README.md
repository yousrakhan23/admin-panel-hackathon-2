 Admin Dashboard

Overview
This Admin Dashboard is a Next.js application designed to manage and monitor orders. It includes authentication for admin login and a dashboard to view, filter, update, and delete orders. The dashboard interacts with Sanity CMS for order management.

 Features
- **Admin Authentication**: Secure login system for admin access.
- **Order Management**: View and manage orders from Sanity CMS.
- **Order Filtering**: Filter orders by status (All, Pending, Dispatched, Completed).
- **Order Actions**: Update order status and delete orders with confirmation alerts.
- **Protected Routes**: Ensures only logged-in admins can access the dashboard.

 Folder Structure
```
src/
├── admin/
│   ├── page.tsx  # Admin login page
│   ├── dashboard/
│   │   ├── page.tsx  # Admin dashboard page
│   ├── components/
│   │   ├── ProtectedRoute.tsx  # Higher-order component for route protection
├── sanity/
│   ├── lib/
│   │   ├── client.ts  # Sanity client configuration
│   │   ├── image.ts  # Image processing utility
```

 Setup Instructions

 1. Clone the Repository
```bash
git clone https://github.com/your-repo/admin-dashboard.git
cd admin-dashboard
```

 2. Install Dependencies
```bash
npm install


 3. Configure Environment Variables
Create a `.env.local` file and add your Sanity configuration:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
```

 4. Run the Development Server
```bash
npm run dev

 5. Admin Login
Use the default credentials for login:
- **Email**: `yousra@gmail.com`
- **Password**: `yousra`

 6. Deployment
To deploy the project using Vercel:
```bash
vercel
```

 Technologies Used
- **Next.js** - React framework for server-side rendering.
- **Sanity CMS** - Backend for order management.
- **Tailwind CSS** - Styling framework.
- **SweetAlert2** - Alert popups for confirmation dialogs.

 Notes
- The login credentials are hardcoded for testing purposes. Implement a secure authentication system for production.
- Ensure that Sanity API permissions allow necessary CRUD operations for orders.

 License
This project is licensed under the MIT License.

Author
Developed by YOUSRA KHAN
Github Repo:
https://github.com/yousrakhan23/admin-panel-hackathon-2.git
