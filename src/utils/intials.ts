export const initialHTMLValue = `
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Simple Call To Action</title>
    <style>
              /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      #back{
        z-index:-1;
      }
      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important; 
        }
        table[class=body] p,
        table[class=body] ul,
        table[class=body] ol,
        table[class=body] td,
        table[class=body] span,
        table[class=body] a {
          font-size: 16px !important; 
        }
        table[class=body] .wrapper,
        table[class=body] .article {
          padding: 10px !important; 
        }
        table[class=body] .content {
          padding: 0 !important; 
        }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important; 
        }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important; 
        }
        table[class=body] .btn table {
          width: 100% !important; 
        }
        table[class=body] .btn a {
          width: 100% !important; 
        }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important; 
        }
      }

      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%; 
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%; 
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important; 
        }
    
      }
    </style>

  </head>
    <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" id="back" class="fixed  top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 z-0" width="1308" /> 
  <body class="bg-gray-300 text-sm m-0 p-0 leading-[1.4] font-sans">
 
    <table class="min-w-full w-full border-collapse" role="presentation" border="0" cellpadding="0" cellspacing="0" class="bg-gray-300 w-full">
      <tr>
        <td class="text-sm align-top">&nbsp;</td>
        <td class="block p-2 mx-auto w-[580px] max-w-xl text-sm align-top">
          <div class="py-[20px]">
            <table class="min-w-full w-full border-collapse" role="presentation" border="0" cellpadding="0" cellspacing="0" >
              <tr>
                <td class="text-center text-sm align-top">
                  <a href="https://twinliner.netlify.app/"><img src="https://raw.githubusercontent.com/kromate/tailwind-inliner/main/public/mlogo.svg" height="70" alt="tailwind-inliner" class=" mx-auto"></a>
                </td>
              </tr>
            </table>
          </div>
          <div class="box-border block p-2 mx-auto  max-w-xl">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="text-transparent hidden h-0 opacity-0 overflow-hidden invisible w-0">This is preheader text. Some clients will show this text as a preview.</span>
            <table class="min-w-full w-full border-collapse bg-white rounded-sm " role="presentation">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="box-border p-5 text-sm align-top ">
                  <table class="min-w-full w-full border-collapse" role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td class="text-sm align-top">
                        <p class="text-sm font-normal m-0 mb-4">Hi there,</p>
                        <p class="text-sm font-normal m-0 mb-4">Sometimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.</p>
                        <table class="min-w-full w-full border-collapse box-border min-w-auto  btn-primary" role="presentation" border="0" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td align="left" class="text-sm align-top pb-4 ">
                                <table class=" min-w-full w-full border-collapse" role="presentation" border="0" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr>
                                      <td class="text-sm align-top bg-white rounded text-center"> <a class="border border-indigo-600 bg-indigo-600 text-white py-3 px-5  rounded box-border  cursor-pointer inline-block text-sm font-bold m-0 no-underline capitalize" href="https://twinliner.netlify.app/" target="_blank">Call To Action</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p class="text-sm font-normal m-0 mb-4">This is a really simple email template. Its sole purpose is to get the recipient to click the button with no distractions.</p>
                        <p class="text-sm font-normal m-0 mb-4">Remember to add more content here before you send.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div class="clear-both text-center w-full mt-[10px]">
              <table class="min-w-full w-full border-collapse" role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="text-gray-500 text-xs text-center pb-2 pt-2  align-top">
                    <span class="apple-link text-gray-500 text-xs text-center">Company Inc, 3 Abbey Road, San Francisco CA 94102</span>
                    <br> Don't like these emails? <a class="text-red-600 underline" href="https://twinliner.netlify.app/">Unsubscribe</a>.
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-500 text-xs text-center pb-2 pt-2 powered-by  align-top">
                    Powered by <a href="https://twinliner.netlify.app/" class="text-gray-500 underline text-xs text-center">tailwind-inliner</a>.
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

          <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td class="text-sm align-top">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>


`;
export const initialCSSValue = `

`;
