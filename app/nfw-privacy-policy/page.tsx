"use client";
import React from "react";

const NFW_PRIVACY = () => {
  return (
    <div
      style={{ fontFamily: "Georgia, serif !important" }}
      className="p-16 flex flex-col space-y-2"
    >
      {/* Header */}
      <section>
        <div className="mb-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4 text-center">
            NASTALEEQ FONT WEBKIT - PRIVACY POLICY
          </h1>
        </div>
        <hr className="w-full self-stretch border-t border-gray-300 my-8" />
        <div className="text-sm">
          <strong>Effective Date:</strong> August 12, 2026
          <br />
          <strong>Last Updated:</strong> August 12, 2026
          <br />
          <strong>Version:</strong> v7.6
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* Introduction */}
      <section>
        <div className="mb-2 flex flex-col items-left justify-center">
          <h1 className="text-2xl font-bold mb-1 ml-8">INTRODUCTION</h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <div className="text-md">
            <p>
              Nastaleeq Fonts Webkit is a Chrome extension that applies
              Nastaliq-style fonts to Urdu, Arabic, and Persian text and their
              sub languages on any websites. We are committed to protecting your
              privacy and ensuring you have a positive experience.
            </p>
            <br />
            <div className="space-y-2">
              <p className="ml-8">This privacy policy explains: </p>
              <ul className="list-disc ml-20">
                <li>
                  <p>What information we collect</p>
                </li>
                <li>
                  <p>How we use it</p>
                </li>
                <li>
                  <p>Your rights</p>
                </li>
                <li>
                  <p>How to contact us</p>
                </li>
              </ul>
            </div>
            <br />
            <p>
              By using this extension, you agree to this Privacy Policy. If you
              do not agree, please uninstall the extension.
            </p>
          </div>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />

      {/* Information We Collect */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">
            INFORMATION WE COLLECT
          </h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <div className="space-y-2 mb-4">
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              User Account Information
            </h2>
            <br />
            <strong className="text-lg ml-8">What we collect:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Email Address</p>
              </li>
              <li>
                <p>Username</p>
              </li>
              <li>
                <p>
                  Password (hashed by Supabase Auth, we never see plaintext)
                </p>
              </li>
              <li>
                <p>Account Creation Date</p>
              </li>
              <li>
                <p>Pro / Free tier status</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Why:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>To save your settings across devices</p>
              </li>
              <li>
                <p>To manage Premium features</p>
              </li>
              <li>
                <p>To send you important account notifications and updates</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Where it is stored:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>
                  Supabase (cloud database in the Southeast Asia
                  &quot;Singapore&quot; region)
                </p>
              </li>
              <li>
                <p>
                  You can delete your account anytime via Settings → Account
                </p>
              </li>
            </ul>
            <strong className="text-lg ml-8">How Long:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Until you manually delete your account</p>
              </li>
            </ul>
          </div>
          <div
            className="h-12 bg-neutral-900/30 -mx-16 my-4"
            aria-hidden="true"
          />
          <div className="space-y-2 mb-4">
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              User Payment Verification Information
            </h2>
            <br />
            <strong className="text-lg ml-8">What we collect:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Email Address</p>
              </li>
              <li>
                <p>Full Name</p>
              </li>
              <li>
                <p>Phone Number (Optional)</p>
              </li>
              <li>
                <p>Transaction Id / Reference Number</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Why:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>To cross verify users payment transactions</p>
              </li>
              <li>
                <p>
                  To provide premium features to corresponding user email
                  address
                </p>
              </li>
              <li>
                <p>
                  To ensure the security and integrity of our payment system
                </p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Where it is stored:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>
                  Supabase (cloud database in the Southeast Asia
                  &quot;Singapore&quot; region)
                </p>
              </li>
            </ul>
            <strong className="text-lg ml-8">How Long:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>
                  As soon as you manually delete your account, your payment
                  verification information will also be deleted from our
                  database.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="h-12 bg-neutral-900/30 -mx-16 my-4"
            aria-hidden="true"
          />
          <div className="space-y-2 mb-4">
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              Settings & Preferences
            </h2>
            <br />
            <strong className="text-lg ml-8">What we collect:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Font choices (Noto, Gulzar, Alvi, Jameel)</p>
              </li>
              <li>
                <p>Text size, line height, word spacing</p>
              </li>
              <li>
                <p>Enabled scripts (Urdu, Arabic, Persian, etc.)</p>
              </li>
              <li>
                <p>Custom fonts you upload (for Pro users)</p>
              </li>
              <li>
                <p>Highlighter colors and custom colors</p>
              </li>
              <li>
                <p>
                  Text-to-speech (TTS) settings: voice, speed, pitch, volume
                </p>
              </li>
              <li>
                <p>Custom keyboard shortcuts</p>
              </li>
              <li>
                <p>Disabled sites (which websites you turn fonts off on)</p>
              </li>
              <li>
                <p>Theme preference (dark/light)</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Why:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>To apply your preferred fonts and settings</p>
              </li>
              <li>
                <p>To personalize your experience</p>
              </li>
              <li>
                <p>To sync across devices (if you&apos;re logged in)</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Where it is stored:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Locally in your Chrome browser (indexDB)</p>
              </li>
              <li>
                <p>
                  Also synced to your Chrome account (chrome.storage.sync) if
                  you&apos;re logged in
                </p>
              </li>
            </ul>
            <strong className="text-lg ml-8">How Long:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>
                  Indefinitely (until you clear browser data or uninstall the
                  extension)
                </p>
              </li>
            </ul>
          </div>
          <div
            className="h-12 bg-neutral-900/30 -mx-16 my-4"
            aria-hidden="true"
          />
          <div className="space-y-2 mb-4">
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              Screenshots/Snips
            </h2>
            <br />
            <strong className="text-lg ml-8">What we collect:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>
                  Screenshots you take using the &quot;Snip&quot; tool (Alt+S)
                </p>
              </li>
              <li>
                <p>Image data (as base64-encoded PNG files)</p>
              </li>
              <li>
                <p>Captions you add to screenshots</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Why:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>
                  To let you organize, download, and export your screenshots
                </p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Where it is stored:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>
                  <strong>ONLY </strong> locally in your browser
                  (chrome.storage.local)
                </p>
              </li>
              <li>
                <p>
                  <strong>NEVER </strong> sent to our servers
                </p>
              </li>
              <li>
                <p>
                  <strong>NOT </strong> synced to your Google/Supabase account
                </p>
              </li>
            </ul>
            <strong className="text-lg ml-8">How Long:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Until you delete them manually or clear your browser data</p>
              </li>
              <li>
                <p>
                  We keep up to 30 most recent screenshots; older ones
                  auto-delete
                </p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Export: </strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Pro users can export all screenshots as a .ZIP file</p>
              </li>
            </ul>
          </div>
          <div
            className="h-12 bg-neutral-900/30 -mx-16 my-4"
            aria-hidden="true"
          />
          <div className="space-y-2 mb-4">
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              Cached Fonts
            </h2>
            <br />
            <strong className="text-lg ml-8">What we collect:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>
                  Large font files (Alvi Nastaleeq ~5MB, Jameel Noori Nastaleeq
                  ~5MB)
                </p>
              </li>
              <li>
                <p>Downloaded from GitHub/CDN on first use</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Why:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>To avoid re-downloading fonts on every page load</p>
              </li>
              <li>
                <p>To work even if you go offline</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Where it is stored:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Locally in IndexedDB (browser&apos;s local storage)</p>
              </li>
              <li>
                <p>
                  <strong>NEVER </strong> sent to any server
                </p>
              </li>
            </ul>
            <strong className="text-lg ml-8">How Long:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Up to 30 days; auto-clears if unused</p>
              </li>
              <li>
                <p>
                  You can manually clear via Settings → Advanced → &quot;Clear
                  Font Cache&quot;
                </p>
              </li>
            </ul>
          </div>
          <div
            className="h-12 bg-neutral-900/30 -mx-16 my-4"
            aria-hidden="true"
          />
          <div className="space-y-2 mb-4">
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              Text-to-Speech Data
            </h2>
            <br />
            <strong className="text-lg ml-8">What we collect:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Text you select to hear aloud</p>
              </li>
              <li>
                <p>Which language you choose</p>
              </li>
              <li>
                <p>Speed, pitch, volume preferences</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Why:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>To generate audio and play it back</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Where it is stored:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>
                  Text is sent to Google Translate API (Google&apos;s servers)
                </p>
              </li>
              <li>
                <p>Audio is returned and played in your browser</p>
              </li>
              <li>
                <p>
                  <strong>NOT </strong> permanently stored by us or Google
                </p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Google&apos;s Privacy:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>
                  See Google Translate Privacy Policy for their data practices
                </p>
              </li>
              <li>
                <p>Audio requests are encrypted (HTTPS)</p>
              </li>
            </ul>
          </div>
          <div
            className="h-12 bg-neutral-900/30 -mx-16 my-4"
            aria-hidden="true"
          />
          <div className="space-y-2 mb-4">
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              Input Method Data
            </h2>
            <br />
            <strong className="text-lg ml-8">What we collect:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Latin text you type (for transliteration to Urdu)</p>
              </li>
              <li>
                <p>English word fragments (for autocomplete suggestions)</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Why:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>To suggest Urdu translations as you type</p>
              </li>
              <li>
                <p>To autocomplete English words</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Where it is stored:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Text is sent to Google Input Tools API and Datamuse API</p>
              </li>
              <li>
                <p>Not permanently stored by us</p>
              </li>
              <li>
                <p>
                  Google and Datamuse may log queries per their privacy policies
                </p>
              </li>
            </ul>
          </div>
          <div
            className="h-12 bg-neutral-900/30 -mx-16 my-4"
            aria-hidden="true"
          />
          <div className="space-y-2 mb-4">
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              Technical Data
            </h2>
            <br />
            <strong className="text-lg ml-8">What we collect:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Extension version you&apos;re using</p>
              </li>
              <li>
                <p>Chrome version (inferred, not explicitly logged)</p>
              </li>
              <li>
                <p>Sites you visit (only to know if fonts should be applied)</p>
              </li>
              <li>
                <p>JavaScript errors (if any)</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Why:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>To identify and fix bugs</p>
              </li>
              <li>
                <p>To improve performance</p>
              </li>
            </ul>
            <strong className="text-lg ml-8">Where it is stored:</strong>
            <ul className="list-disc ml-20 my-2">
              <li>
                <p>Locally in your browser console logs</p>
              </li>
              <li>
                <p>
                  <strong>NOT </strong>sent to our servers unless you report a
                  bug
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* How We Use Your Information */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">
            HOW WE USE YOUR INFORMATION
          </h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse text-left text-md">
              <thead className="bg-neutral-800 text-md uppercase tracking-wider text-gray-100 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-3 font-semibold">Data</th>
                  <th className="px-6 py-3 font-semibold">Purpose</th>
                  <th className="px-6 py-3 font-semibold">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-neutral-800">
                <tr className="hover:bg-neutral-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    Email/username
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Account management
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Provided voluntarily by user
                  </td>
                </tr>
                <tr className="hover:bg-neutral-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    Payment Information
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Verify payment & activate Pro
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Needed to confirm your purchase and unlock Pro features
                  </td>
                </tr>
                <tr className="hover:bg-neutral-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">Settings</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Personalization
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Needed to apply and remember your preferences
                  </td>
                </tr>
                <tr className="hover:bg-neutral-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">Screenshots</td>
                  <td className="px-6 py-4 whitespace-nowrap">User control</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Provided voluntarily by you via the Snip tool
                  </td>
                </tr>
                <tr className="hover:bg-neutral-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">Fonts</td>
                  <td className="px-6 py-4 whitespace-nowrap">Font delivery</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Needed for core extension functionality
                  </td>
                </tr>
                <tr className="hover:bg-neutral-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">TTS text</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Audio generation
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Sent only when you request text-to-speech playback
                  </td>
                </tr>
                <tr className="hover:bg-neutral-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    Technical data
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Bug fixes</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Collected locally to help diagnose issues if you report a
                    bug
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* Data Sharing */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">DATA SHARING</h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <strong className="text-lg">
            We do not share your personal data with anyone except:
          </strong>
          <div className="ml-4">
            <ol className="list-decimal list-outside ml-8 my-4">
              <li>
                <strong>Supabase </strong> (for logged-in users)
                <ul className="list-disc ml-8 my-2">
                  <li>
                    <p>Stores your email, username, Pro status</p>
                  </li>
                  <li>
                    <p>Signs a Data Processing Agreement</p>
                  </li>
                  <li>
                    <p>
                      Based in Southeast Asia (Singapore) with SOC 2
                      certification
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Google </strong> (for TTS and transliteration)
                <ul className="list-disc ml-8 my-2">
                  <li>
                    <p>Text you enter is sent to Google&apos;s APIs</p>
                  </li>
                  <li>
                    <p>See Google&apos;s privacy policy for their practices</p>
                  </li>
                  <li>
                    <p>Essential for extension functionality</p>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Github </strong> (for font downloads)
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    <p>Font files are hosted on GitHub</p>
                  </li>
                  <li>
                    <p>Your request is logged by GitHub&apos;s servers</p>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Datamuse </strong> (for English autocomplete)
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    <p>Word fragments are sent to Datamuse API</p>
                  </li>
                  <li>
                    <p>Datamuse does not store queries</p>
                  </li>
                  <li>
                    <p>Open-source, non-commercial service</p>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <strong className="text-lg ">We do not:</strong>
          <ul className="list-disc ml-20 my-2">
            <li>
              <p>❌ Sell your data</p>
            </li>
            <li>
              <p>❌ Collect analytics (no Google Analytics, Mixpanel, etc.)</p>
            </li>
            <li>
              <p>❌ Show ads</p>
            </li>
            <li>
              <p>❌ Track your browsing history</p>
            </li>
            <li>
              <p>❌ Use your screenshots for any purpose</p>
            </li>
          </ul>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* Your Privacy Rights */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">YOUR PRIVACY RIGHTS</h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <div className="mb-4">
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              Access Your Data
            </h2>
            <br />
            <strong className="text-lg ml-4">
              You can see all data we hold:
            </strong>
            <div>
              <ol className="list-disc ml-16 my-2">
                <li>
                  <p> Open extension → Settings → Account</p>
                </li>
                <li>
                  <p> Click &quot;Export My Data&quot;</p>
                </li>
                <li>
                  <p> Download a JSON file with everything</p>
                </li>
              </ol>
            </div>
            <div
              className="h-12 bg-neutral-900/30 -mx-16 my-4"
              aria-hidden="true"
            />
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              Delete Your Data:
            </h2>
            <br />
            <div>
              <strong className="text-lg ml-4">Temporary Delete:</strong>
              <ul className="list-disc ml-16 my-2">
                <li>
                  <p>
                    Clear Chrome browsing data (Settings → Privacy → Clear
                    browsing data)
                  </p>
                </li>
                <li>
                  <p> Select &quot;Extensions&quot; and &quot;All time&quot;</p>
                </li>
                <li>
                  <p>
                    {" "}
                    This clears local settings but keeps your online account
                  </p>
                </li>
              </ul>
              <strong className="text-lg ml-4">Full Delete:</strong>
              <ul className="list-disc ml-16 my-2">
                <li>
                  <p>Open extension → Settings → Account</p>
                </li>
                <li>
                  <p> Click &quot;Delete Account&quot;</p>
                </li>
                <li>
                  <p>Confirm with your email</p>
                </li>
                <li>
                  <p>All data deleted from servers within 7 days</p>
                </li>
                <li>
                  <p>Your account cannot be recovered</p>
                </li>
              </ul>
            </div>
            <div
              className="h-12 bg-neutral-900/30 -mx-16 my-4"
              aria-hidden="true"
            />
            <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
              Opt-Out
            </h2>
            <br />
            <div>
              <ul className="list-disc ml-16 my-2">
                <li>
                  <p>
                    Uninstall the extension (Settings → Extensions → Remove)
                  </p>
                </li>
                <li>
                  <p>All local data is automatically deleted</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* Data Retention */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">DATA RETENTION</h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <table className="w-full table-fixed border-collapse text-left text-md">
            <thead className="bg-neutral-800 text-md uppercase tracking-wider text-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-6 py-3 font-semibold">Type</th>
                <th className="px-6 py-3 font-semibold">Retention</th>
                <th>How to Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-neutral-800">
              <tr className="hover:bg-neutral-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">Account</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Until you delete account
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Settings → Account → Delete
                </td>
              </tr>
              <tr className="hover:bg-neutral-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  Payment Information
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Until you delete account
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Settings → Account → Delete
                </td>
              </tr>
              <tr className="hover:bg-neutral-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">Settings</td>
                <td className="px-6 py-4 whitespace-nowrap">Indefinitely</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Uninstall extension or Clear data
                </td>
              </tr>
              <tr className="hover:bg-neutral-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">Screenshots</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  30 days (auto-delete old ones)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Manual delete in gallery
                </td>
              </tr>
              <tr className="hover:bg-neutral-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">Fonts</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  30 days (auto-expire)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Browser Settings → Clear cache & files
                </td>
              </tr>
              <tr className="hover:bg-neutral-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">TTS</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Not stored (sent to Google)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">N/A </td>
              </tr>
              <tr className="hover:bg-neutral-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">Session tokens</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ~1 hour (auto-refresh) or deleted on logout
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Logout or delete account
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* Security */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">SECURITY</h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
            We take security seriously:{" "}
          </h2>
          <br />
          <strong className="text-lg ml-4">✅ What we do: </strong>
          <ul className="list-disc ml-16 my-2">
            <li>
              <p>Use HTTPS for all connections (encrypted)</p>
            </li>
            <li>
              <p>Passwords hashed by Supabase Auth (never stored plaintext)</p>
            </li>
            <li>
              <p>Local data stored in Chrome&apos;s encrypted storage</p>
            </li>
            <li>
              <p>Regular security audits</p>
            </li>
          </ul>
          <br />
          <strong className="text-lg ml-4">⚠️ Limitations: </strong>
          <ul className="list-disc ml-16 my-2">
            <li>
              <p>Local browser storage is only as secure as your computer</p>
            </li>
            <li>
              <p>
                If someone has access to your computer, they can access local
                data
              </p>
            </li>
          </ul>
          <br />
          <strong className="text-lg ml-4">🚨 Report Security Issues: </strong>
          <ul className="list-disc ml-16 my-2">
            <li>
              <p>Do not post security bugs publicly</p>
            </li>
            <li>
              <p>Email: nastaleeq-support@asaleem.com</p>
            </li>
            <li>
              <p>We will respond within 48 hours</p>
            </li>
          </ul>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* Contact Us */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">CONTACT US</h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
            Questions about this Privacy Policy?:{" "}
          </h2>
          <br />
          <p className="ml-8">
            <strong>Email:</strong> admin@asaleem.com
          </p>
          <br />
          <strong className="text-lg ml-4">Support & Bug Reports: </strong>
          <ul className="list-disc ml-16 my-2">
            <li>
              <p>Open extension → Settings → Help & Support</p>
            </li>
            <li>
              <p>Or email: nastaleeq-support@asaleem.com</p>
            </li>
          </ul>
          <br />
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* Changes to Policy */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">
            CHANGES TO THIS POLICY
          </h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
            We may update this Privacy Policy. We will:{" "}
          </h2>
          <br />
          <ol className="list-disc ml-16 my-2">
            <li>
              <p>Update the &quot;Last Updated&quot; date</p>
            </li>
            <li>
              <p>Post the new version here</p>
            </li>
            <li>
              <p>Notify you via extension if changes are significant</p>
            </li>
          </ol>
          <br />
          <p>If you disagree with changes, uninstall the extension. </p>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* Compliance */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">COMPLIANCE</h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
            This extension complies with:{" "}
          </h2>
          <br />
          <ul className="list-disc ml-16 my-2">
            <li>
              <p>California Consumer Privacy Act (CCPA)</p>
            </li>
            <li>
              <p>UK Data Protection Act (DPA 2018)</p>
            </li>
            <li>
              <p>Chrome Web Store Developer Program Policies</p>
            </li>
            <li>
              <p>Chrome Web Store User Data Policy</p>
            </li>
          </ul>
          <br />
          <p>
            The use of information received from Google APIs will adhere to the
            Chrome Web Store User Data Policy, including the Limited Use
            requirements.
          </p>
          <br />
          <p>
            This policy is written for CCPA and UK DPA compliance. We do not
            currently make specific representations regarding GDPR (EU)
            compliance
          </p>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* Cookies & Tracking */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">COOKIES & TRACKING</h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <ul className="list-disc ml-16 my-2">
            <li>
              <p>
                <strong>Cookies: </strong>This extension does NOT use cookies.
              </p>
            </li>
            <li>
              <p>
                <strong>Tracking: </strong>This extension does NOT use tracking
                pixels, beacons, or analytics.
              </p>
            </li>
            <li>
              <p>
                <strong>Exceptions: </strong>Third-party services (Google,
                Datamuse) may use their own cookies. See their privacy policies
                for details
              </p>
            </li>
          </ul>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* Do Not Track */}
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-1 ml-8">DO NOT TRACK</h1>
          <hr className="w-full self-stretch border-t border-gray-300 my-8" />
          <h2 className="inline-block text-xl font-bold mb-4 border-b-1 pb-1">
            Some browsers send a &quot;Do Not Track&quot; (DNT) signal. Our
            extension:{" "}
          </h2>
          <br />
          <ul className="list-disc ml-16 my-2">
            <li>
              <p>Respects DNT preferences</p>
            </li>
            <li>
              <p>Does not override browser privacy settings</p>
            </li>
            <li>
              <p>Does not use fingerprinting</p>
            </li>
          </ul>
        </div>
      </section>
      <hr className="w-full self-stretch border-t border-gray-300 my-8" />
      {/* End of Policy */}
      <footer>
        <h1 className="text-2xl font-bold mb-1 ml-8">END OF PRIVACY POLICY</h1>
      </footer>
    </div>
  );
};

export default NFW_PRIVACY;
