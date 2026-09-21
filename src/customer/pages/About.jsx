import react from 'react';
import { Link } from 'react-router-dom';
import '../../../src/App.css';
// import './header.css';
import { useState } from 'react';
import Header from '../component/Header.jsx';

export default function About({ activePage, setActivePage }) {

    return (
        <>
        <Header activePage={activePage} setActivePage={setActivePage} />
            <div className="card">
                <h2 className="page-header">About Port2Pack</h2>
                <p>Port2Pack bridges the gap between independent sellers and direct shoppers through an integrated multi-vendor network.</p>
            </div>
        </>
    )
}