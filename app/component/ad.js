'use client'
import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import he from 'he'; // Import the he library for HTML entity decoding

const ContentWithAds = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        // Fetch the HTML file containing content with placeholders for ad tags
        fetch('../../blogs/abc.html')
            .then(response => response.text())
            .then(html => {
                // Define your ad tags
                const adTags = [
                    {
                        slotId: 'div-gpt-ad-23129971914',
                        adUnitPath: '/22515155853/Hangama_BJP_1'
                    },
                    {
                        slotId: 'div-gpt-ad-23129971917',
                        adUnitPath: '/22515155853/Hangama_BJP_13'
                    },
                    {
                        slotId: 'div-gpt-ad-23129971920',
                        adUnitPath: '/22515155853/Hangama_BJP_16'
                    },
                    {
                        slotId: 'div-gpt-ad-23129971923',
                        adUnitPath: '/22515155853/Hangama_BJP_20'
                    },
                    {
                        slotId: 'div-gpt-ad-23129971926',
                        adUnitPath: '/22515155853/Hangama_BJP_23'
                    },
                    {
                        slotId: 'div-gpt-ad-23129971929',
                        adUnitPath: '/22515155853/Hangama_BJP_26'
                    },
                    {
                        slotId: 'div-gpt-ad-23129971932',
                        adUnitPath: '/22515155853/Hangama_BJP_3'
                    },
                    {
                        slotId: 'div-gpt-ad-23129971935',
                        adUnitPath: '/22515155853/Hangama_BJP_5'
                    },
                    {
                        slotId: 'div-gpt-ad-23129971938',
                        adUnitPath: '/22515155853/Hangama_BJP_8'
                    },
                    {
                        slotId: 'div-gpt-ad-23129972355',
                        adUnitPath: '/22515155853/Hangama_BJP_10'
                    },
                    {
                        slotId: 'div-gpt-ad-23129972358',
                        adUnitPath: '/22515155853/Hangama_BJP_11'
                    },
                    {
                        slotId: 'div-gpt-ad-23129972361',
                        adUnitPath: '/22515155853/Hangama_BJP_12'
                    },
                    {
                        slotId: 'div-gpt-ad-23129972364',
                        adUnitPath: '/22515155853/Hangama_BJP_14'
                    },
                    {
                        slotId: 'div-gpt-ad-23129972357',
                        adUnitPath: '/22515155853/Hangama_BJP_15'
                    },
                    {
                        slotId: 'div-gpt-ad-23129972370',
                        adUnitPath: '/22515155853/Hangama_BJP_17'
                    },
                    {
                        slotId: 'div-gpt-ad-23129972373',
                        adUnitPath: '/22515155853/Hangama_BJP_18'
                    },
                    // Add more ad tags here as needed
                ];

                // Replace placeholders with ad slots
                let updatedHtml = html;
                adTags.forEach((adTag, index) => {
                    const { slotId } = adTag;
                    const placeholderRegex = new RegExp(`<!-- adTag${index + 1}Placeholder -->`, 'g');
                    updatedHtml = updatedHtml.replace(placeholderRegex, `<LazyLoad><div id="${slotId}"></div></LazyLoad>`);
                });

                // Generate ad tag elements dynamically
                adTags.forEach(adTag => {
                    const { slotId, adUnitPath } = adTag;

                    // Create script element for GPT
                    const gptScript = document.createElement('script');
                    gptScript.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
                    gptScript.async = true;
                    document.head.appendChild(gptScript);

                    // Create script element for ad tag
                    const adScript = document.createElement('script');
                    adScript.innerHTML = `
                        window.googletag = window.googletag || {cmd: []};
                        googletag.cmd.push(function() {
                          googletag.defineSlot('${adUnitPath}', [300, 250], '${slotId}').addService(googletag.pubads());
                          googletag.pubads().enableSingleRequest();
                          googletag.enableServices();
                        });
                        googletag.cmd.push(function() { googletag.display('${slotId}'); });
                    `;
                    document.body.appendChild(adScript);
                });

                setContent(updatedHtml);
            });
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: he.decode(content) }} />
    );
};

export default ContentWithAds;
