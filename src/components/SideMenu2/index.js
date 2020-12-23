import React from 'react'
import {FaChevronDown} from 'react-icons/fa'

import './styles.scss'

export default function SideMenu2() {
	return (
		<div class="custom-menu">
			<nav>
				<ul>
					<li class="li-nivel-1">
						<a href="javascript:void(0);"  aria-haspopup="true">1 nivel - 1 <FaChevronDown />
							<ul class="sub-menu">
								<li>
									<a href="javascript:void(0);"  aria-haspopup="true">1 nivel - 1 <FaChevronDown />
										<ul class="sub-menu">
											<li>teste</li>
										</ul>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);"  aria-haspopup="true">1 nivel - 1 <FaChevronDown />
										<ul class="sub-menu">
											<li>teste</li>
										</ul>
									</a>
								</li>
							</ul>
						</a>
						
					</li>

					<li class="li-nivel-1">
						<a href="javascript:void(0);"  aria-haspopup="true">1 nivel - 1 <FaChevronDown />
						<ul class="sub-menu">
							<li>teste</li>
						</ul>
						</a>
						
					</li>
				</ul>
			</nav>
		</div>
	)
}
