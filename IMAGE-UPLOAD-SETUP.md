# 📸 Image Upload Setup Guide

## 🎯 Current Status:
- ✅ **Authentication fixed** - No more "Unauthorized" errors
- ⚠️ **Blob storage needed** - For image uploads to work

## 🚀 **Quick Setup (5 minutes):**

### **Step 1: Get Free Vercel Account**
1. Go to: https://vercel.com/signup
2. Sign up with GitHub, Google, or email (free)

### **Step 2: Create Blob Storage**
1. In Vercel dashboard, click **"Storage"**
2. Click **"Create Database"** 
3. Select **"Blob"**
4. Choose any name (e.g., "algostockgpt-images")
5. Click **"Create"**

### **Step 3: Get Your Token**
1. After creation, you'll see connection details
2. Copy the `BLOB_READ_WRITE_TOKEN` value
3. It looks like: `vercel_blob_rw_ABC123...`

### **Step 4: Add to Environment**
1. Open `.env.local` file
2. Replace `your_actual_blob_token_here` with your real token:
   ```
   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_ABC123_your_actual_token
   ```

### **Step 5: Restart Server**
1. Stop your server (Ctrl + C)
2. Start again: `npm run dev`
3. Try uploading an image - it should work! 🎉

## 🎯 **Alternative: Skip Image Uploads**
If you don't want image uploads right now:
- Leave the token commented out in `.env.local`
- All other features (chat, stock queries) work perfectly
- You'll get a clear error message when trying to upload

## ✅ **After Setup:**
- **Image uploads work** 📸
- **Financial chart analysis** 📊
- **Stock screenshot insights** 💹
- **All chat features** 💬

---
**Total setup time: ~5 minutes for full image functionality!** 🚀
