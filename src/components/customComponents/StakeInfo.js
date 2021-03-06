import React from 'react';

import {Row, Col, Image, } from 'react-bootstrap';

import ReactTooltip from "react-tooltip";

// Icon Imports
import { AiOutlineInfoCircle } from 'react-icons/ai'

import { IconContext } from 'react-icons'

import './ComponentCSS/StakeInfo.css'

export default function StakeInfo(props) {

    return (
            <div className="stake-info-box" id={props.id} onSubmit={props.send}>
                <p> STATUS </p>

                <ul>
                    <li>Total Token Balance: {props.tokenBalance} SFT</li>
                    <li>Pending Stake: {props.pendingStakeBalance} SFT</li>
                    <li>Staked Safex Token: {props.stakedBalance} SFT</li>
                    <li>Interest Accrued: {props.interest.toLocaleString()} SFX per SFT</li>
                    <li>Current Block: {props.blockHeight}</li>
                    <li>Next Interval: {props.nextInterval}</li>
                    <li>Total SFT Staked on the Network: {props.totalNetworkStake}</li>
                </ul>
            </div>
                

    )
}