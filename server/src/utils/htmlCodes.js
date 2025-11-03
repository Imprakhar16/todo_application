export const resend_otp_html = (name,otp)=>{
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f6f9fc; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
                    <!-- Header with gradient -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">New Verification Code 🔐</h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <p style="margin: 0 0 8px; color: #1a1a1a; font-size: 18px; font-weight: 600;">Hi ${name},</p>
                            <p style="margin: 0 0 24px; color: #4a5568; font-size: 15px; line-height: 1.6;">You requested a new verification code. Use the code below to complete your email verification:</p>
                            
                            <!-- OTP Box -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 32px 0;">
                                <tr>
                                    <td align="center">
                                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 3px;">
                                            <div style="background-color: #ffffff; border-radius: 10px; padding: 24px 48px;">
                                                <div style="color: #667eea; font-size: 36px; font-weight: 700; letter-spacing: 8px; font-family: 'Courier New', monospace;">
                                                    ${otp}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Info box -->
                            <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; margin: 24px 0;">
                                <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 1.5;">
                                    ⏱️ <strong>Important:</strong> This verification code will expire in <strong>10 minutes</strong> for security reasons.
                                </p>
                            </div>
                            
                            <p style="margin: 24px 0 0; color: #718096; font-size: 14px; line-height: 1.6;">
                                If you didn't request this code, please ignore this email or contact our support team if you have concerns.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f7fafc; padding: 30px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 8px; color: #4a5568; font-size: 14px; font-weight: 600;">Need help?</p>
                            <p style="margin: 0; color: #718096; font-size: 13px;">Contact us at <a href="mailto:support@yourapp.com" style="color: #667eea; text-decoration: none;">support@yourapp.com</a></p>
                            <p style="margin: 16px 0 0; color: #a0aec0; font-size: 12px;">© 2024 Your Company. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

export const send_otp_html = (name,otp)=>{
    return`
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f6f9fc; padding: 40px 20px;">
              <tr>
                  <td align="center">
                      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
                          <!-- Header with gradient -->
                          <tr>
                              <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 40px 30px; text-align: center;">
                                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Welcome to Our Platform! 🎉</h1>
                              </td>
                          </tr>
                          
                          <!-- Content -->
                          <tr>
                              <td style="padding: 40px;">
                                  <p style="margin: 0 0 8px; color: #1a1a1a; font-size: 18px; font-weight: 600;">Hi ${name},</p>
                                  <p style="margin: 0 0 24px; color: #4a5568; font-size: 15px; line-height: 1.6;">Thank you for signing up! To complete your registration and secure your account, please verify your email address using the code below:</p>
                                  
                                  <!-- OTP Box -->
                                  <table width="100%" cellpadding="0" cellspacing="0" style="margin: 32px 0;">
                                      <tr>
                                          <td align="center">
                                              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 3px;">
                                                  <div style="background-color: #ffffff; border-radius: 10px; padding: 24px 48px;">
                                                      <div style="color: #667eea; font-size: 36px; font-weight: 700; letter-spacing: 8px; font-family: 'Courier New', monospace;">
                                                          ${otp}
                                                      </div>
                                                  </div>
                                              </div>
                                          </td>
                                      </tr>
                                  </table>
                                  
                                  <!-- Info box -->
                                  <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; margin: 24px 0;">
                                      <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 1.5;">
                                          ⏱️ <strong>Important:</strong> This verification code will expire in <strong>10 minutes</strong> for security reasons.
                                      </p>
                                  </div>
                                  
                                  <p style="margin: 24px 0 0; color: #718096; font-size: 14px; line-height: 1.6;">
                                      If you didn't create an account with us, please ignore this email or contact our support team if you have concerns.
                                  </p>
                              </td>
                          </tr>
                          
                          <!-- Footer -->
                          <tr>
                              <td style="background-color: #f7fafc; padding: 30px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                                  <p style="margin: 0 0 8px; color: #4a5568; font-size: 14px; font-weight: 600;">Need help?</p>
                                  <p style="margin: 0; color: #718096; font-size: 13px;">Contact us at <a href="mailto:support@yourapp.com" style="color: #667eea; text-decoration: none;">support@yourapp.com</a></p>
                                  <p style="margin: 16px 0 0; color: #a0aec0; font-size: 12px;">© 2024 Your Company. All rights reserved.</p>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      </body>
      </html>
  `
}
