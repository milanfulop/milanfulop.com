"use client"

import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import React, { useEffect, useState, useRef } from 'react';

interface AppearingBoxProps {
    children: React.ReactNode;
    marginTop?: string
    marginBottom?: string;
}

export default function AppearingBox({ children, marginBottom = '20px', marginTop = '20px' }: AppearingBoxProps) {
    return (
        <motion.div
            viewport={{amount: 0.8, once: true}}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            style={{
                marginTop: marginTop,
                marginBottom: marginBottom,
            }}
        >
            {children}
        </motion.div>
    );
}

const cardVariants: Variants = {
    hidden: {
        y: 0,
        opacity: 0,
    },
    visible: {
        y: -20,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.6,
        },
    },
}