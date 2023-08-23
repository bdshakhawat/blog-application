
/** @type {import('next').NextConfig} */
const nextConfig = {
//  Custom build directory
      distDir: 'build', 
      headers: async () => {
        return [
          {
            source: '/:path*',
            
            headers: [
              {
                key: 'X-Frame-Options',
                value: 'DENY', // Frame-busting header
              },
            ],
          },
        ];
      },
    };
    
      
      
      
      // distDir:"build",
      // async headers(){
            // return[
                // For a specific path header setting
            // {source:"/product", headers:[{key:'app-auth-key', value:'123XYZ'}]
                //  For all source  }
                // {source:"/path*", headers:[{key:'app-auth-key', value:'123XYZ'}] 
            // For showing in iframe 
            // {source:"/path*", headers:[{key:'X-Frame-Options', value:'SAMEORIGINE'}] 
            // For not showing in iframe
            // {source:"/path*", headers:[{key:'X-Frame-Options', value:'DENY'}]} 
            // For protecting website from malicious attack use this
            // {source:"/path*", headers:[{key:'Content-Security-Policy',
            //      value:"default-src 'self'; script-src 'self'; style-src 'www.cdn.com' "}]}
        // For giving permission to use microphone, camera, battery,browsing-topic,geolocation use 'permission policy'
    
            //     {source:"/:path*", headers:[{key:'Permission-Policy',
            //         value:"camera=(self); microphone=()"}]}
        
    
    
    
      //     ]
      //   }


module.exports = nextConfig
