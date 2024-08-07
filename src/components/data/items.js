async function getProductData(id) {
    try {
      // درخواست به API برای دریافت داده‌های محصولات
      const response = await fetch('https://jewellery-store.chbk.run/api/products/');
      
      // بررسی وضعیت پاسخ
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // تبدیل پاسخ به فرمت JSON
      const data = await response.json();
      
      // بررسی ساختار داده‌ها
      console.log(data);
      
      // فرض بر این است که داده‌ها در یک ویژگی به نام 'products' هستند
      // اگر داده‌ها در یک ویژگی دیگر هستند، نام آن را تغییر دهید
      const products = data.products || data.items || data; // اصلاح به ساختار درست
  
      // جستجوی محصول با شناسه مشخص
      const product = products.find(item => item.id === id);
      
      // بازگشت محصول یافت شده
      return product;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return null;  // یا می‌توانید پیغام خطای مناسب برگردانید
    }
  }
  
  export { getProductData };
  