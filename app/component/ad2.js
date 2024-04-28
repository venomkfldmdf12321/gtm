'use client'

import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import he from 'he'; // Import the he library for HTML entity decoding

const ContentWithAds = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        // Fetch the HTML file containing content with placeholders for ad tags
        fetch('../../blogs/abc2.html')
            .then(response => response.text())
            .then(html => {
                // Define your ad tags
                const adTags = [
                    `<div>
                        <!-- Lazy-loaded ad tag 1 -->
                        <LazyLoad height={200} offset={100}>
                            <div>


                                <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
                                <script>
                                    window.googletag = window.googletag || {cmd: []};
                                    googletag.cmd.push(function() {
                                        googletag.defineSlot('/22515155853/tv9_hindi_UP_RJ_32', [300, 250], 'div-gpt-ad-23126880471').addService(googletag.pubads());
                                        googletag.pubads().enableSingleRequest();
                                        googletag.enableServices();
                                    });
                                </script>
                                <div class="ad">
                                    <div id='div-gpt-ad-23126880471' style='min-width: 300px; min-height: 250px;'>
                                        <script>
                                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-23126880471'); });
                                        </script>
                                    </div>
                                </div>


                            
                            </div>
                        </LazyLoad>
                    </div>`,

                    `<div>
                        <!-- Lazy-loaded ad tag 2 -->
                        <LazyLoad height={200} offset={100}>
                            <div>


                            <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
                            <script>
                              window.googletag = window.googletag || {cmd: []};
                              googletag.cmd.push(function() {
                                googletag.defineSlot('/22515155853/tv9_hindi_UP_RJ_33', [300, 250], 'div-gpt-ad-23126881002').addService(googletag.pubads());
                                googletag.pubads().enableSingleRequest();
                                googletag.enableServices();
                              });
                            </script>
                            <div class="ad"><!-- /23126881002 -->
                            <div id='div-gpt-ad-23126881002' style='min-width: 300px; min-height: 250px;'>
                                <script>
                                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-23126881002'); });
                                </script>
                            </div>
                        </div>


                            </div>
                        </LazyLoad>
                    </div>`,

                    `<div>
                        <!-- Lazy-loaded ad tag 3 -->
                        <LazyLoad height={200} offset={100}>
                            <div>


                            <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
                            <script>
                              window.googletag = window.googletag || {cmd: []};
                              googletag.cmd.push(function() {
                                googletag.defineSlot('/22515155853/tv9_hindi_UP_RJ_37', [300, 250], 'div-gpt-ad-23126882949').addService(googletag.pubads());
                                googletag.pubads().enableSingleRequest();
                                googletag.enableServices();
                              });
                            </script>
                            <div class="ad"><!-- /23126882949 -->
                            <div id='div-gpt-ad-23126882949' style='min-width: 300px; min-height: 250px;'>
                                <script>
                                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-23126882949'); });
                                </script>
                            </div>
                        </div>    
                        
                        

                        </div>
                        </LazyLoad>
                    </div>`,

                    `<div>
                        <!-- Lazy-loaded ad tag 4 -->
                        <LazyLoad height={200} offset={100}>
                            <div>


                            <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
                            <script>
                              window.googletag = window.googletag || {cmd: []};
                              googletag.cmd.push(function() {
                                googletag.defineSlot('/22515155853/tv9_hindi_UP_RJ_48', [300, 250], 'div-gpt-ad-23126892420').addService(googletag.pubads());
                                googletag.pubads().enableSingleRequest();
                                googletag.enableServices();
                              });
                            </script>
                            <div class="ad"><!-- /23126892420 -->
                            <div id='div-gpt-ad-23126892420' style='min-width: 300px; min-height: 250px;'>
                                <script>
                                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-23126892420'); });
                                </script>
                            </div>
                        </div>



                        </div>
                        </LazyLoad>
                    </div>`,

                    `<div>
                        <!-- Lazy-loaded ad tag 5 -->
                        <LazyLoad height={200} offset={100}>
                            <div>


                            <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
                            <script>
                              window.googletag = window.googletag || {cmd: []};
                              googletag.cmd.push(function() {
                                googletag.defineSlot('/22515155853/tv9_hindi_UP_RJ_14', [300, 250], 'div-gpt-ad-23127116740').addService(googletag.pubads());
                                googletag.pubads().enableSingleRequest();
                                googletag.enableServices();
                              });
                            </script>
                            <div class="ad"><!-- /23127116743 -->
            <div id='div-gpt-ad-23127116743' style='min-width: 300px; min-height: 250px;'>
                <script>
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-23127116743'); });
                </script>
            </div>
        </div>


        </div>
                        </LazyLoad>
                    </div>`,

                    `<div>
                        <!-- Lazy-loaded ad tag 6 -->
                        <LazyLoad height={200} offset={100}>
                            <div>


                            <script async="" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
                            <script>
                            window.googletag = window.googletag || {cmd: []};
                            googletag.cmd.push(function() {
                              googletag.defineSlot('/6516239/bs_partner_content_300x250_middle19', [300, 250], 'div-gpt-ad-1705652744556-0').addService(googletag.pubads());
                              googletag.pubads().enableSingleRequest();
                              googletag.enableServices();
                            });
                          </script>
                            <div class="ad"><!-- /23127116746 -->
                            <div id='div-gpt-ad-1705652744556-0' style='min-width: 300px; min-height: 250px;'>
                                <script>
                                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-23127116746'); });
                                </script>
                            </div>
                        </div>                


                        </div>
                        </LazyLoad>
                    </div>`,
                ];

                // Replace placeholders with actual ad tags
                let updatedHtml = html;
                adTags.forEach((adTag, index) => {
                    updatedHtml = updatedHtml.replace(`<!-- adTag${index + 1}Placeholder -->`, adTag);
                });

                setContent(updatedHtml);
            });
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: he.decode(content) }} />
    );
};

export default ContentWithAds;

